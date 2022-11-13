# About this file

This file will outline the preliminary plans and development steps for this course.

# Stages

## Stage 1

- &#9745; Define modules
- &#9744; Define the contents of modules

## Stage 2

- &#9744; Develop materials for each module using **reveal.js?**
- &#9744; Develop scripts for presenting modules. In order to average out all the presentors, each presentor may have a different level of knowledge on a topic, and the people who created them will not always present the material, so we need to help them understand this material. What form these scenarios will take is still unknown.

## Stage 3

- &#9744; Develop cross-review homeworks
- &#9744; Recheck modules and update them if necessary

## Stage 4

- &#9744; Prepare recordings of module presentations and upload them to YouTube channel

## Stage 5

- &#9744; Create channels for communication with students
- &#9744; Announce the start of the course

# Rules

- **Each task** must be created and assigned in github issues;
- **Branch** should be create using github issues. Open your issue -> press "_Create a branch_" button -> press "_Change branch source_" button -> choose "**develop**" branch source -> press "_Create branch_" button -> clone this branch;
- PRs should be opened **to the develop branch** and merged when they have at least 3 approvals;
- PR name example: (feat) 003: your feature description. Where 003 is your issue number (.../react-native-course/issues/3);

## How to develop scripts for presenting modules
1. You should checkout the ```develop``` branch;
1. You must use the template presentation file located at ```reveal-js/template.html```;
1. Each section must have a ```class``` attribute, except for sections within a section;
1. It is **forbidden** to define any custom styles for your presentation;
1. If you can't find the expected slide in the template, you can define a new slide in the template and create a pull request (if it doesn't affect other slides, you can just push it to the ```develop``` branch), after that you can use it in your presentation;
1. Each slide should look great on mobile devices;
1. Each slide should have speaker notes;
1. Image tags shouldn't have strict height or width;


# Communication channels

- Telegram chat
- Google Meet
