#! /bin/sh

files="PITCHME.md PITCHME.yaml README.md"
for f in $files
do
    touch $f
done

mkdir -p assets/css
mkdir -p assets/img
