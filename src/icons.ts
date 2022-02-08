import { Icon } from "./types/Icon";
function icon(name: string): Icon {
  return {
    [`_f_${name}`]: {
      iconPath: `./icons/${name}.svg`,
    },
  };
}

function iconGeneric(name: string): Icon {
  return {
    [`_${name}`]: {
      iconPath: `./icons/${name}.svg`,
    },
  };
}
function folderIcon(name: string): Icon {
  return {
    [`_fd_${name}`]: {
      iconPath: `./icons/${name}.svg`,
    },
  };
}

const icons: Icon = {
  ...iconGeneric("file"),
  ...iconGeneric("folder"),
  ...iconGeneric("folder_open"),
  ...folderIcon("app"),
  ...folderIcon("app_open"),
  ...folderIcon("src"),
  ...folderIcon("src_open"),
  ...folderIcon("component"),
  ...folderIcon("component_open"),
  ...folderIcon("api"),
  ...folderIcon("api_open"),
  ...folderIcon("typescript"),
  ...folderIcon("typescript_open"),
  ...folderIcon("node"),
  ...folderIcon("node_open"),
  ...folderIcon("audio"),
  ...folderIcon("audio_open"),
  ...folderIcon("aurelia"),
  ...folderIcon("aurelia_open"),
  ...folderIcon("aws"),
  ...folderIcon("aws_open"),
  ...folderIcon("azure"),
  ...folderIcon("azure_open"),
  ...folderIcon("images"),
  ...folderIcon("images_open"),
  ...folderIcon("asset"),
  ...folderIcon("asset_open"),
  ...folderIcon("css"),
  ...folderIcon("css_open"),
  ...folderIcon("dist"),
  ...folderIcon("dist_open"),
  ...folderIcon("model"),
  ...folderIcon("model_open"),
  ...folderIcon("config"),
  ...folderIcon("config_open"),
  ...folderIcon("git"),
  ...folderIcon("git_open"),
  ...folderIcon("github"),
  ...folderIcon("github_open"),
  ...folderIcon("gitlab"),
  ...folderIcon("gitlab_open"),
  ...folderIcon("vscode"),
  ...folderIcon("vscode_open"),
  ...folderIcon("webpack"),
  ...folderIcon("webpack_open"),
  ...folderIcon("view"),
  ...folderIcon("view_open"),
  ...folderIcon("video"),
  ...folderIcon("video_open"),
  ...folderIcon("tools"),
  ...folderIcon("tools_open"),
  ...folderIcon("utils"),
  ...folderIcon("utils_open"),
  ...folderIcon("theme"),
  ...folderIcon("theme_open"),
  ...folderIcon("temp"),
  ...folderIcon("temp_open"),
  ...folderIcon("template"),
  ...folderIcon("template_open"),
  ...folderIcon("svg"),
  ...folderIcon("svg_open"),
  ...folderIcon("layout"),
  ...folderIcon("layout_open"),
  ...folderIcon("library"),
  ...folderIcon("library_open"),
  ...folderIcon("i18n"),
  ...folderIcon("i18n_open"),
  ...folderIcon("database"),
  ...folderIcon("database_open"),
  ...folderIcon("controller"),
  ...folderIcon("controller_open"),
  ...folderIcon("docker"),
  ...folderIcon("docker_open"),
  ...folderIcon("javascript"),
  ...folderIcon("javascript_open"),
  ...folderIcon("log"),
  ...folderIcon("log_open"),
  ...folderIcon("include"),
  ...folderIcon("include_open"),
  ...folderIcon("less"),
  ...folderIcon("less_open"),
  ...folderIcon("sass"),
  ...folderIcon("sass_open"),
  ...folderIcon("docs"),
  ...folderIcon("docs_open"),
  ...folderIcon("fonts"),
  ...folderIcon("fonts_open"),
  ...folderIcon("test"),
  ...folderIcon("test_open"),
  ...folderIcon("core"),
  ...folderIcon("core_open"),
  ...folderIcon("bower"),
  ...folderIcon("bower_open"),
  ...folderIcon("secure"),
  ...folderIcon("secure_open"),
  ...folderIcon("command"),
  ...folderIcon("command_open"),
  ...folderIcon("error"),
  ...folderIcon("error_open"),
  ...folderIcon("event"),
  ...folderIcon("event_open"),
  ...folderIcon("expo"),
  ...folderIcon("expo_open"),
  ...folderIcon("export"),
  ...folderIcon("export_open"),
  ...folderIcon("firebase"),
  ...folderIcon("firebase_open"),
  ...folderIcon("flow"),
  ...folderIcon("flow_open"),
  ...folderIcon("environment"),
  ...folderIcon("environment_open"),
  ...folderIcon("wordpress"),
  ...folderIcon("wordpress_open"),
  ...folderIcon("svelte"),
  ...folderIcon("svelte_open"),
  ...folderIcon("sublime"),
  ...folderIcon("sublime_open"),
  ...folderIcon("stylus"),
  ...folderIcon("stylus_open"),
  ...folderIcon("vm"),
  ...folderIcon("vm_open"),
  ...folderIcon("route"),
  ...folderIcon("route_open"),
  ...folderIcon("public"),
  ...folderIcon("public_open"),
  ...folderIcon("nuxt"),
  ...folderIcon("nuxt_open"),
  ...folderIcon("rules"),
  ...folderIcon("rules_open"),
  ...folderIcon("upload"),
  ...folderIcon("upload_open"),
  ...folderIcon("update"),
  ...folderIcon("update_open"),
  ...folderIcon("vuepress"),
  ...folderIcon("vuepress_open"),
  ...folderIcon("script"),
  ...folderIcon("script_open"),
  ...folderIcon("plugin"),
  ...folderIcon("plugin_open"),
  ...folderIcon("python"),
  ...folderIcon("python_open"),
  ...folderIcon("php"),
  ...folderIcon("php_open"),
  ...folderIcon("package"),
  ...folderIcon("package_open"),
  ...folderIcon("phpmailer"),
  ...folderIcon("phpmailer_open"),
  ...folderIcon("middleware"),
  ...folderIcon("middleware_open"),
  ...folderIcon("markdown"),
  ...folderIcon("markdown_open"),
  ...folderIcon("serverless"),
  ...folderIcon("serverless_open"),
  ...folderIcon("server"),
  ...folderIcon("server_open"),
  ...folderIcon("shared"),
  ...folderIcon("shared_open"),
  ...folderIcon("meta"),
  ...folderIcon("meta_open"),
  ...folderIcon("json"),
  ...folderIcon("json_open"),
  ...folderIcon("gradle"),
  ...folderIcon("gradle_open"),
  ...icon("firebase_"),
  ...icon("ember"),
  ...icon("blink"),
  ...icon("adonis"),
  ...icon("applescript"),
  ...icon("ada"),
  ...icon("android_"),
  ...icon("arduino"),
  ...icon("elm"),
  ...icon("apollo"),
  ...icon("astyle"),
  ...icon("aurelia_"),
  ...icon("azure_"),
  ...icon("bitbucket"),
  ...icon("changelog"),
  ...icon("authors"),
  ...icon("django"),
  ...icon("word"),
  ...icon("windicss"),
  ...icon("vim"),
  ...icon("svelte_"),
  ...icon("sass_"),
  ...icon("scss"),
  ...icon("less_"),
  ...icon("stylus_"),
  ...icon("postcssconfig"),
  ...icon("docker_"),
  ...icon("dockerignore"),
  ...icon("dockerdebug"),
  ...icon("git_"),
  ...icon("readme"),
  ...icon("html"),
  ...icon("json_"),
  ...icon("rjson"),
  ...icon("markdown_"),
  ...icon("css_"),
  ...icon("cssmap"),
  ...icon("js"),
  ...icon("jsmap"),
  ...icon("typescript_"),
  ...icon("typescriptdef"),
  ...icon("tsx"),
  ...icon("vue"),
  ...icon("image"),
  ...icon("imageico"),
  ...icon("zip"),
  ...icon("yarn"),
  ...icon("yarnerror"),
  ...icon("error"),
  ...icon("npm"),
  ...icon("svg_"),
  ...icon("yaml"),
  ...icon("font_"),
  ...icon("php_"),
  ...icon("phpunit"),
  ...icon("twig"),
  ...icon("composer"),
  ...icon("symfony"),
  ...icon("xml"),
  ...icon("robots"),
  ...icon("bundler"),
  ...icon("stylelint"),
  ...icon("prettier"),
  ...icon("python_"),
  ...icon("log_"),
  ...icon("license"),
  ...icon("audio_"),
  ...icon("lua"),
  ...icon("csharp"),
  ...icon("dartlang"),
  ...icon("eslint"),
  ...icon("handlebars"),
  ...icon("webpack_"),
  ...icon("ruby"),
  ...icon("erb"),
  ...icon("jest"),
  ...icon("babel"),
  ...icon("toml"),
  ...icon("elixir"),
  ...icon("exs"),
  ...icon("rust"),
  ...icon("reactjs"),
  ...icon("reactts"),
  ...icon("angular"),
  ...icon("rollup"),
  ...icon("java"),
  ...icon("gulp"),
  ...icon("grunt"),
  ...icon("editorconfig"),
  ...icon("shell"),
  ...icon("vscode_"),
  ...icon("ai"),
  ...icon("photoshop"),
  ...icon("pdf"),
  ...icon("go"),
  ...icon("go_package"),
  ...icon("tmpl"),
  ...icon("browserslist"),
  ...icon("erlang"),
  ...icon("vite"),
  ...icon("mint"),
  ...icon("eex"),
  ...icon("env"),
  ...icon("nvm"),
  ...icon("sql"),
  ...icon("nginx"),
  ...icon("conf"),
  ...icon("c"),
  ...icon("cpp"),
  ...icon("powershell"),
  ...icon("powershelldata"),
  ...icon("powershellmodule"),
  ...icon("njk"),
  ...icon("blade"),
  ...icon("liquid"),
  ...icon("pug"),
  ...icon("cheader"),
  ...icon("m"),
  ...icon("swift"),
  ...icon("graphql"),
  ...icon("groovy"),
  ...icon("testjs"),
  ...icon("testts"),
  ...icon("storybook"),
  ...icon("wasm"),
  ...icon("cli"),
  ...icon("bat"),
  ...icon("nuxt_"),
  ...icon("netlify"),
  ...icon("vercel"),
  ...icon("tailwind"),
  ...icon("windi"),
  ...icon("nodemon"),
  ...icon("jinja"),
  ...icon("haml"),
  ...icon("smarty"),
  ...icon("haskell"),
  ...icon("gradle_"),
  ...icon("nim"),
  ...icon("nestjs"),
  ...icon("nestjscontroller"),
  ...icon("nestjsservice"),
  ...icon("nestjsmodule"),
  ...icon("nestjsguard"),
  ...icon("nestjsdecorator"),
  ...icon("nestjsfilter"),
  ...icon("jenkins"),
  ...icon("txt"),
  ...icon("binary"),
  ...icon("cert"),
  ...icon("key"),
  ...icon("prisma"),
  ...icon("compodoc"),
  ...icon("julia"),
  ...icon("csv"),
  ...icon("karma"),
  ...icon("tsconfig"),
  ...icon("jsconfig"),
  ...icon("travis"),
  ...icon("razor"),
  ...icon("cshtml"),
  ...icon("jsp"),
  ...icon("avi"),
  ...icon("mp4"),
  ...icon("mov"),
  ...icon("video_"),
  ...icon("rescript"),
  ...icon("bsconfig"),
  ...icon("opengl"),
  ...icon("llvm"),
  ...icon("info"),
  ...icon("ipynb"),
  ...icon("sol"),
  ...icon("bicep"),
  ...icon("qt"),
  ...icon("ui"),
  ...icon("prolog"),
  ...icon("user"),
};

export default icons;
