#!/bin/sh
cd $HOME/playgrounds/apps
projects=$(ls)
selected_project=$(gum choose $projects)
action=$(gum choose -c "Run" "Build" "Clean" "Test" "Install" "Uninstall" "Update")
echo $r
