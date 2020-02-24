(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{211:function(e,t,a){"use strict";a.r(t);var o=a(28),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("h2",{attrs:{id:"version-tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version-tags"}},[e._v("#")]),e._v(" Version tags")]),e._v(" "),a("p",[e._v("This image provides various versions that are available via tags.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("beta")]),e._v(" tag has been removed, use "),a("code",[e._v("latest")]),e._v(" instead.")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[a("strong",[e._v("Tag")])]),e._v(" "),a("th",[a("strong",[e._v("Description")])])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[e._v("latest")])]),e._v(" "),a("td",[e._v("build from latest commit")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[e._v("x.y.z")])]),e._v(" "),a("td",[e._v("version "),a("code",[e._v("x.y.z")])])])])]),e._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("p",[e._v("Here are some example snippets to help you get started creating a container.")]),e._v(" "),a("h3",{attrs:{id:"docker-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-2"}},[e._v("#")]),e._v(" docker")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker create \\\n  --name=komga \\\n  --user 1000:1000 \\\n  -p 8080:8080 \\\n  -e KOMGA_LIBRARIES_SCAN_DIRECTORY_EXCLUSIONS=#recycle,@eaDir\n  --mount type=bind,source=/path/to/config,target=/config \\\n  --mount type=bind,source=/path/to/books,target=/books \\\n  --restart unless-stopped \\\n  gotson/komga\n")])])]),a("h3",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[e._v("#")]),e._v(" docker-compose")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("---\nversion: '3.3'\nservices:\n  komga:\n    image: gotson/komga\n    container_name: komga\n    volumes:\n      - type: bind\n        source: /path/to/data\n        target: /config\n      - type: bind\n        source: /path/to/books\n        target: /books\n      - type: bind\n        source: /etc/timezone\n        target: /etc/timezone\n        read_only: true\n    ports:\n      - 8080:8080\n    user: \"1000:1000\"\n    environment:\n      - KOMGA_LIBRARIES_SCAN_DIRECTORY_EXCLUSIONS=#recycle,@eaDir\n    restart: unless-stopped\n")])])]),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[e._v("Container images are configured using parameters passed at runtime (such as those above).\nThese parameters are separated by a colon and indicate "),a("code",[e._v("external:internal")]),e._v(" respectively.\nFor example, "),a("code",[e._v("-p 8080:80")]),e._v(" would expose port "),a("code",[e._v("80")]),e._v(" from inside the container to be accessible from the host's IP on port "),a("code",[e._v("8080")]),e._v(" outside the container.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Parameter")]),e._v(" "),a("th",[e._v("Function")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[e._v("-p 8080")])]),e._v(" "),a("td",[e._v("The port for the Komga APIs and web interface")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[e._v("--user: 1000:1000")])]),e._v(" "),a("td",[e._v("User:Group identifier - see below for explanation")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[e._v("--mount type=bind,source=/path/to/config,target=/config")])]),e._v(" "),a("td",[e._v("Database and Komga configurations")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[e._v("--mount type=bind,source=/path/to/books,target=/books")])]),e._v(" "),a("td",[e._v("Location of books library on disk")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[e._v("-e ENV_VAR=value")])]),e._v(" "),a("td",[e._v("Any "),a("a",{attrs:{href:"/configuration"}},[e._v("configuration")]),e._v(" environment variable")])])])]),e._v(" "),a("h2",{attrs:{id:"user-group-identifiers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-group-identifiers"}},[e._v("#")]),e._v(" User / Group Identifiers")]),e._v(" "),a("p",[e._v("When using volumes ("),a("code",[e._v("-v")]),e._v(" flags) permissions issues can arise between the host OS and the container, we avoid this issue by allowing you to specify the user ID and group ID.")]),e._v(" "),a("p",[e._v("Ensure any volume directories on the host are owned by the same user you specify and any permissions issues will vanish like magic.")]),e._v(" "),a("p",[e._v("In this instance "),a("code",[e._v("UID=1000")]),e._v(" and "),a("code",[e._v("GID=1000")]),e._v(", to find yours use id user as below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ id username\n  uid=1000(dockeruser) gid=1000(dockergroup) groups=1000(dockergroup)\n")])])]),a("h2",{attrs:{id:"support-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#support-info"}},[e._v("#")]),e._v(" Support info")]),e._v(" "),a("ul",[a("li",[e._v("Shell access whilst the container is running: "),a("code",[e._v("docker exec -it komga /bin/bash")])]),e._v(" "),a("li",[e._v("To monitor the logs of the container in realtime: "),a("code",[e._v("docker logs -f komga")])])]),e._v(" "),a("h2",{attrs:{id:"updating"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updating"}},[e._v("#")]),e._v(" Updating")]),e._v(" "),a("p",[e._v("Below are the instructions for updating containers:")]),e._v(" "),a("h3",{attrs:{id:"via-docker-run-create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#via-docker-run-create"}},[e._v("#")]),e._v(" Via Docker Run/Create")]),e._v(" "),a("ul",[a("li",[e._v("Update the image: "),a("code",[e._v("docker pull gotson/komga")])]),e._v(" "),a("li",[e._v("Stop the running container: "),a("code",[e._v("docker stop komga")])]),e._v(" "),a("li",[e._v("Delete the container: "),a("code",[e._v("docker rm komga")])]),e._v(" "),a("li",[e._v("Recreate a new container with the same docker create parameters as instructed above (if mapped correctly to a host folder, your "),a("code",[e._v("/config")]),e._v(" folder and settings will be preserved)")]),e._v(" "),a("li",[e._v("Start the new container: "),a("code",[e._v("docker start komga")])]),e._v(" "),a("li",[e._v("You can also remove the old dangling images: "),a("code",[e._v("docker image prune")])])]),e._v(" "),a("h3",{attrs:{id:"via-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#via-docker-compose"}},[e._v("#")]),e._v(" Via Docker Compose")]),e._v(" "),a("ul",[a("li",[e._v("Update all images: "),a("code",[e._v("docker-compose pull")]),e._v(" "),a("ul",[a("li",[e._v("or update a single image: "),a("code",[e._v("docker-compose pull komga")])])])]),e._v(" "),a("li",[e._v("Let compose update all containers as necessary: "),a("code",[e._v("docker-compose up -d")]),e._v(" "),a("ul",[a("li",[e._v("or update a single container: "),a("code",[e._v("docker-compose up -d komga")])])])]),e._v(" "),a("li",[e._v("You can also remove the old dangling images: "),a("code",[e._v("docker image prune")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);