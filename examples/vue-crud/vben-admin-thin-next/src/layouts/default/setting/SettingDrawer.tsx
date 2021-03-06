import { defineComponent, computed, unref, ref } from 'vue';
import { BasicDrawer } from '/@/components/Drawer/index';
import { Divider, Switch, Tooltip, InputNumber, Select } from 'ant-design-vue';
import Button from '/@/components/Button/index.vue';
import { MenuModeEnum, MenuTypeEnum } from '/@/enums/menuEnum';
import { CopyOutlined, RedoOutlined, CheckOutlined } from '@ant-design/icons-vue';
import { appStore } from '/@/store/modules/app';
import { userStore } from '/@/store/modules/user';
import { ProjectConfig } from '/@/types/config';

import { useMessage } from '/@/hooks/web/useMessage';
import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';

import defaultSetting from '/@/settings/projectSetting';

import mixImg from '/@/assets/images/layout/menu-mix.svg';
import sidebarImg from '/@/assets/images/layout/menu-sidebar.svg';
import menuTopImg from '/@/assets/images/layout/menu-top.svg';
import { updateColorWeak, updateGrayMode } from '/@/setup/theme';
import { baseHandler } from './handler';
import {
  HandlerEnum,
  contentModeOptions,
  topMenuAlignOptions,
  menuTriggerOptions,
  routerTransitionOptions,
} from './const';
import { HEADER_PRESET_BG_COLOR_LIST, SIDE_BAR_BG_COLOR_LIST } from '/@/settings/colorSetting';

interface SwitchOptions {
  config?: DeepPartial<ProjectConfig>;
  def?: any;
  disabled?: boolean;
  handler?: Fn;
}

interface SelectConfig {
  options?: LabelValueOptions;
  def?: any;
  disabled?: boolean;
  handler?: Fn;
}

interface ThemeOptions {
  def?: string;
  handler?: Fn;
}

export default defineComponent({
  name: 'SettingDrawer',
  setup(_, { attrs }) {
    const { createSuccessModal, createMessage } = useMessage();

    const getProjectConfigRef = computed(() => {
      return appStore.getProjectConfig;
    });

    const getIsHorizontalRef = computed(() => {
      return unref(getProjectConfigRef).menuSetting.mode === MenuModeEnum.HORIZONTAL;
    });

    const getShowHeaderRef = computed(() => {
      return unref(getProjectConfigRef).headerSetting.show;
    });

    const getShowMenuRef = computed(() => {
      return unref(getProjectConfigRef).menuSetting.show && !unref(getIsHorizontalRef);
    });

    const getShowTabsRef = computed(() => {
      return unref(getProjectConfigRef).multiTabsSetting.show;
    });

    function handleCopy() {
      const { isSuccessRef } = useCopyToClipboard(
        JSON.stringify(unref(getProjectConfigRef), null, 2)
      );
      unref(isSuccessRef) &&
        createSuccessModal({
          title: '????????????',
          content: '????????????,?????? src/settings/projectSetting.ts ??????????????????',
        });
    }

    function handleResetSetting() {
      try {
        appStore.commitProjectConfigState(defaultSetting);
        const { colorWeak, grayMode } = defaultSetting;
        // updateTheme(themeColor);
        updateColorWeak(colorWeak);
        updateGrayMode(grayMode);
        createMessage.success('???????????????');
      } catch (error) {
        createMessage.error(error);
      }
    }

    function handleClearAndRedo() {
      localStorage.clear();
      userStore.resumeAllState();
      location.reload();
    }

    function renderSidebar() {
      const {
        menuSetting: { type, split },
      } = unref(getProjectConfigRef);

      const typeList = ref([
        {
          title: '??????????????????',
          mode: MenuModeEnum.INLINE,
          type: MenuTypeEnum.SIDEBAR,
          src: sidebarImg,
        },
        {
          title: '????????????',
          mode: MenuModeEnum.INLINE,
          type: MenuTypeEnum.MIX,
          src: mixImg,
        },

        {
          title: '??????????????????',
          mode: MenuModeEnum.HORIZONTAL,
          type: MenuTypeEnum.TOP_MENU,
          src: menuTopImg,
        },
      ]);
      return [
        <div class={`setting-drawer__siderbar`}>
          {unref(typeList).map((item) => {
            const { title, type: ItemType, mode, src } = item;
            return (
              <Tooltip title={title} placement="bottom" key={title}>
                {{
                  default: () => (
                    <div
                      onClick={baseHandler.bind(null, HandlerEnum.CHANGE_LAYOUT, {
                        mode: mode,
                        type: ItemType,
                        split: unref(getIsHorizontalRef) ? false : undefined,
                      })}
                    >
                      <CheckOutlined class={['check-icon', type === ItemType ? 'active' : '']} />
                      <img src={src} />
                    </div>
                  ),
                }}
              </Tooltip>
            );
          })}
        </div>,
        renderSwitchItem('????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.MENU_SPLIT, e);
          },
          def: split,
          disabled: !unref(getShowMenuRef) || type !== MenuTypeEnum.MIX,
        }),
        // renderSelectItem('????????????', {
        //   handler: (e) => {
        //     baseHandler(HandlerEnum.HEADER_THEME, e);
        //   },
        //   def: headerTheme,
        //   options: themeOptions,
        //   disabled: !unref(getShowHeaderRef),
        // }),
        // renderSelectItem('????????????', {
        //   handler: (e) => {
        //     baseHandler(HandlerEnum.MENU_THEME, e);
        //   },
        //   def: menuTheme,
        //   options: themeOptions,
        //   disabled: !unref(getShowMenuRef),
        // }),
      ];
    }
    /**
     * @description:
     */
    function renderFeatures() {
      const {
        contentMode,
        headerSetting: { fixed },
        menuSetting: {
          hasDrag,
          collapsed,
          showSearch,
          menuWidth,
          topMenuAlign,
          collapsedShowTitle,
          trigger,
          accordion,
        } = {},
      } = appStore.getProjectConfig;
      return [
        renderSwitchItem('??????????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.MENU_HAS_DRAG, e);
          },
          def: hasDrag,
          disabled: !unref(getShowMenuRef),
        }),
        renderSwitchItem('??????????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.MENU_SHOW_SEARCH, e);
          },
          def: showSearch,
          disabled: !unref(getShowMenuRef),
        }),
        renderSwitchItem('???????????????????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.MENU_ACCORDION, e);
          },
          def: accordion,
          disabled: !unref(getShowMenuRef),
        }),
        renderSwitchItem('????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.MENU_COLLAPSED, e);
          },
          def: collapsed,
          disabled: !unref(getShowMenuRef),
        }),
        renderSwitchItem('????????????????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.MENU_COLLAPSED_SHOW_TITLE, e);
          },
          def: collapsedShowTitle,
          disabled: !unref(getShowMenuRef) || !collapsed,
        }),
        renderSwitchItem('??????header', {
          handler: (e) => {
            baseHandler(HandlerEnum.HEADER_FIXED, e);
          },
          def: fixed,
          disabled: !unref(getShowHeaderRef),
        }),
        renderSelectItem('??????????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.MENU_TOP_ALIGN, e);
          },
          def: topMenuAlign,
          options: topMenuAlignOptions,
          disabled: !unref(getShowHeaderRef),
        }),
        renderSelectItem('??????????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.MENU_TRIGGER, e);
          },
          def: trigger,
          options: menuTriggerOptions,
        }),

        renderSelectItem('??????????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.CONTENT_MODE, e);
          },
          def: contentMode,
          options: contentModeOptions,
        }),
        <div class={`setting-drawer__cell-item`}>
          <span>????????????</span>
          <InputNumber
            style="width:120px"
            size="small"
            min={0}
            onChange={(e: any) => {
              baseHandler(HandlerEnum.LOCK_TIME, e);
            }}
            defaultValue={appStore.getProjectConfig.lockTime}
            formatter={(value: string) => {
              if (parseInt(value) === 0) {
                return '0(???????????????)';
              }
              return `${value}??????`;
            }}
          />
        </div>,
        <div class={`setting-drawer__cell-item`}>
          <span>??????????????????</span>
          <InputNumber
            style="width:120px"
            size="small"
            max={600}
            min={100}
            step={10}
            disabled={!unref(getShowMenuRef)}
            defaultValue={menuWidth}
            formatter={(value: string) => `${parseInt(value)}px`}
            onChange={(e: any) => {
              baseHandler(HandlerEnum.MENU_WIDTH, e);
            }}
          />
        </div>,
      ];
    }
    function renderTransition() {
      const { routerTransition, openRouterTransition, openPageLoading } = appStore.getProjectConfig;

      return (
        <>
          {renderSwitchItem('????????????loading', {
            handler: (e) => {
              baseHandler(HandlerEnum.OPEN_PAGE_LOADING, e);
            },
            def: openPageLoading,
          })}
          {renderSwitchItem('????????????', {
            handler: (e) => {
              baseHandler(HandlerEnum.OPEN_ROUTE_TRANSITION, e);
            },
            def: openRouterTransition,
          })}
          {renderSelectItem('????????????', {
            handler: (e) => {
              baseHandler(HandlerEnum.ROUTER_TRANSITION, e);
            },
            def: routerTransition,
            options: routerTransitionOptions,
            disabled: !openRouterTransition,
          })}
        </>
      );
    }
    function renderContent() {
      const {
        grayMode,
        colorWeak,
        fullContent,
        showLogo,
        headerSetting: { show: showHeader },
        menuSetting: { show: showMenu },
        multiTabsSetting: { show: showMultiple, showQuick, showIcon: showTabIcon },
        showBreadCrumb,
        showBreadCrumbIcon,
      } = unref(getProjectConfigRef);
      return [
        renderSwitchItem('?????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.SHOW_BREADCRUMB, e);
          },
          def: showBreadCrumb,
          disabled: !unref(getShowHeaderRef),
        }),
        renderSwitchItem('???????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.SHOW_BREADCRUMB_ICON, e);
          },
          def: showBreadCrumbIcon,
          disabled: !unref(getShowHeaderRef),
        }),
        renderSwitchItem('?????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.TABS_SHOW, e);
          },
          def: showMultiple,
        }),
        renderSwitchItem('?????????????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.TABS_SHOW_QUICK, e);
          },
          def: showQuick,
          disabled: !unref(getShowTabsRef),
        }),
        renderSwitchItem('???????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.TABS_SHOW_ICON, e);
          },
          def: showTabIcon,
          disabled: !unref(getShowTabsRef),
        }),
        renderSwitchItem('????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.MENU_SHOW_SIDEBAR, e);
          },
          def: showMenu,
          disabled: unref(getIsHorizontalRef),
        }),
        renderSwitchItem('??????', {
          handler: (e) => {
            baseHandler(HandlerEnum.HEADER_SHOW, e);
          },
          def: showHeader,
        }),
        renderSwitchItem('Logo', {
          handler: (e) => {
            baseHandler(HandlerEnum.SHOW_LOGO, e);
          },
          def: showLogo,
        }),
        renderSwitchItem('????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.FULL_CONTENT, e);
          },
          def: fullContent,
        }),
        renderSwitchItem('????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.GRAY_MODE, e);
          },
          def: grayMode,
        }),
        renderSwitchItem('????????????', {
          handler: (e) => {
            baseHandler(HandlerEnum.COLOR_WEAK, e);
          },
          def: colorWeak,
        }),
      ];
    }

    function renderSelectItem(text: string, config?: SelectConfig) {
      const { handler, def, disabled = false, options } = config || {};
      const opt = def ? { value: def, defaultValue: def } : {};
      return (
        <div class={`setting-drawer__cell-item`}>
          <span>{text}</span>
          <Select
            {...opt}
            disabled={disabled}
            size="small"
            style={{ width: '120px' }}
            onChange={(e) => {
              handler && handler(e);
            }}
            options={options}
          />
        </div>
      );
    }

    function renderSwitchItem(text: string, options?: SwitchOptions) {
      const { handler, def, disabled = false } = options || {};
      const opt = def ? { checked: def } : {};
      return (
        <div class={`setting-drawer__cell-item`}>
          <span>{text}</span>
          <Switch
            {...opt}
            disabled={disabled}
            onChange={(e: any) => {
              handler && handler(e);
            }}
            checkedChildren="???"
            unCheckedChildren="???"
          />
        </div>
      );
    }

    function renderTheme() {
      const { headerBgColor, menuBgColor } = unref(getProjectConfigRef);
      return (
        <>
          <Divider>{() => '????????????'}</Divider>
          {renderThemeItem(HEADER_PRESET_BG_COLOR_LIST, {
            def: headerBgColor,
            handler: (e) => {
              baseHandler(HandlerEnum.HEADER_THEME, e);
            },
          })}
          <Divider>{() => '????????????'}</Divider>
          {renderThemeItem(SIDE_BAR_BG_COLOR_LIST, {
            def: menuBgColor,
            handler: (e) => {
              baseHandler(HandlerEnum.MENU_THEME, e);
            },
          })}
        </>
      );
    }

    function renderThemeItem(colorList: string[], opt: ThemeOptions) {
      const { def, handler } = opt;
      return (
        <div class={`setting-drawer__theme-item`}>
          {colorList.map((item) => {
            return (
              <span
                onClick={() => handler && handler(item)}
                key={item}
                class={[def === item ? 'active' : '']}
                style={{
                  background: item,
                }}
              >
                <CheckOutlined class="icon" />
              </span>
            );
          })}
        </div>
      );
    }

    return () => (
      <BasicDrawer {...attrs} title="????????????" width={300} wrapClassName="setting-drawer">
        {{
          default: () => (
            <>
              <Divider>{() => '???????????????'}</Divider>
              {renderSidebar()}

              {renderTheme()}

              <Divider>{() => '????????????'}</Divider>
              {renderFeatures()}
              <Divider>{() => '????????????'}</Divider>
              {renderContent()}
              <Divider>{() => '????????????'}</Divider>
              {renderTransition()}
              <Divider />
              <div class="setting-drawer__footer">
                <Button type="primary" block onClick={handleCopy}>
                  {() => (
                    <>
                      <CopyOutlined class="mr-2" />
                      ??????
                    </>
                  )}
                </Button>
                <Button block class="mt-2" onClick={handleResetSetting} color="warning">
                  {() => (
                    <>
                      <RedoOutlined class="mr-2" />
                      ??????
                    </>
                  )}
                </Button>
                <Button block class="mt-2" onClick={handleClearAndRedo} color="error">
                  {() => (
                    <>
                      <RedoOutlined class="mr-2" />
                      ??????????????????????????????
                    </>
                  )}
                </Button>
              </div>
            </>
          ),
        }}
      </BasicDrawer>
    );
  },
});
