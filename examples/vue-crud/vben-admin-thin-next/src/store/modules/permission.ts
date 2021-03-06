import type { AppRouteRecordRaw, Menu } from '/@/router/types';
import store from '/@/store/index';
import { hotModuleUnregisterModule } from '/@/utils/helper/vuexHelper';

import { VuexModule, Mutation, Module, getModule, Action } from 'vuex-module-decorators';

import { PermissionModeEnum } from '/@/enums/appEnum';

import { appStore } from '/@/store/modules/app';
import { userStore } from '/@/store/modules/user';

import { asyncRoutes } from '/@/router/routes';
import { filter } from '/@/utils/helper/treeHelper';
import { toRaw } from 'vue';

import { getMenuListById } from '/@/api/sys/menu';
import { genRouteModule, transformObjToRoute } from '/@/utils/helper/routeHelper';
import { transformRouteToMenu } from '/@/utils/helper/menuHelper';
import { REDIRECT_ROUTE } from '/@/router/constant';
import { useMessage } from '/@/hooks/web/useMessage';
const { createMessage } = useMessage();

const NAME = 'permission';
hotModuleUnregisterModule(NAME);
@Module({ dynamic: true, namespaced: true, store, name: NAME })
class Permission extends VuexModule {
  // Permission code list
  private permCodeListState: string[] = [];

  // Whether the route has been dynamically added
  private isDynamicAddedRouteState = false;

  // To trigger a menu update
  private lastBuildMenuTimeState = 0;

  // Backstage menu list
  private backMenuListState: Menu[] = [];

  get getPermCodeListState() {
    return this.permCodeListState;
  }

  get getBackMenuListState() {
    return this.backMenuListState;
  }

  get getLastBuildMenuTimeState() {
    return this.lastBuildMenuTimeState;
  }

  get getIsDynamicAddedRouteState() {
    return this.isDynamicAddedRouteState;
  }

  @Mutation
  commitPermCodeListState(codeList: string[]): void {
    this.permCodeListState = codeList;
  }

  @Mutation
  commitBackMenuListState(list: Menu[]): void {
    this.backMenuListState = list;
  }

  @Mutation
  commitLastBuildMenuTimeState(): void {
    this.lastBuildMenuTimeState = new Date().getTime();
  }

  @Mutation
  commitDynamicAddedRouteState(added: boolean): void {
    this.isDynamicAddedRouteState = added;
  }

  @Mutation
  commitResetState(): void {
    this.isDynamicAddedRouteState = false;
    this.permCodeListState = [];
    this.backMenuListState = [];
    this.lastBuildMenuTimeState = 0;
  }

  @Action
  async buildRoutesAction(): Promise<AppRouteRecordRaw[]> {
    let routes: AppRouteRecordRaw[] = [];
    const roleList = toRaw(userStore.getRoleListState);

    const { permissionMode } = appStore.getProjectConfig;

    // role permissions
    if (permissionMode === PermissionModeEnum.ROLE) {
      routes = filter(asyncRoutes, (route) => {
        const { meta } = route;
        const { roles } = meta!;
        if (!roles) return true;
        return roleList.some((role) => roles.includes(role));
      });
      // this.commitRoutesState(routes);
      // Background permissions
      // warn(
      //   `?????????????????????:${PermissionModeEnum.ROLE},??????src/store/modules/permission.ts????????????????????????????????????,????????????????????????????????????!`
      // );
    } else if (permissionMode === PermissionModeEnum.BACK) {
      const messageKey = 'loadMenu';
      createMessage.loading({
        content: '???????????????...',
        key: messageKey,
        duration: 1,
      });
      // ????????????????????????????????????????????????
      const paramId = userStore.getUserInfoState.userId;
      if (!paramId) {
        throw new Error('paramId is undefined!');
      }
      let routeList: any[] = await getMenuListById({ id: paramId });
      // ??????????????????
      routeList = transformObjToRoute(routeList);
      //  ???????????????????????????
      const backMenuList = transformRouteToMenu(routeList);
      this.commitBackMenuListState(backMenuList);
      // ????????????
      routes = genRouteModule(routeList) as AppRouteRecordRaw[];
      routes.push(REDIRECT_ROUTE);
    }

    return routes;
  }
}
export { Permission };
export const permissionStore = getModule<Permission>(Permission);
