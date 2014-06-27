#Brackets Extension Statistics
This website shows download statistics for all [Brackets](http://brackets.io/) Extension in the [Brackets Extension Registry](https://brackets-registry.aboutweb.com/)

##How does it work?
The [Brackets Extension Registry](https://brackets-registry.aboutweb.com/) has an unofficial API for download statistics. We were inspired by [this tweet](https://twitter.com/brktsextensions/status/481858349642682368) and want to provide a beautiful overview over all extension downloads.

There is a PHP Script on our servers that uses the unofficial API with this cURL statement:

```curl -i -H "Accept: application/json" https://brackets-registry.aboutweb.com/registryList```

[This site](http://konstantinkobs.github.io/BracketsExtensionStats/) uses the results and renders them in a beautiful way.

##Resources
This site was built with awesome projects by other people.

- [Kube](http://imperavi.com/kube/) as a CSS framework
- [jQuery](http://jquery.com) for AJAX calls and DOM manipulation
- [mustache.js](https://github.com/janl/mustache.js) for templating
- [HINT.css](http://kushagragour.in/lab/hint/) for the tooltips
- [SpinKit](https://github.com/tobiasahlin/SpinKit) for the loading animation