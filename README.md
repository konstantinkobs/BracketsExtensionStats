#Brackets Extension Statistics
This website shows download statistics for all [Brackets](http://brackets.io/) Extension in the [Brackets Extension Registry](https://brackets-registry.aboutweb.com/)

##How to use this site?
Load the website and wait, until all the data was fetched and processed. Then you will get a beautiful overview over all extensions and their download statistics. In the table on the right *(below the titel and description on mobile)* you will find the *last five* version numbers and the amount of downloads as well as the amount of total downloads.

###All download numbers
If you want to see all download numbers for all versions, just click on the table body. This will enlarge the table if possible. Click one more time for shrinking it again.

###Version launch dates
Hover over the version number with your mouse and you should see the publishing date of that version.

###Bookmarking one extension
If you want to check just one extension periodically, it is easy to bookmark a link to its entry. Just find the extension entry and click on its title. This will generate a custom link to this extension entry. Now you can bookmark the website. When you click on your bookmark, the site will load all extension statistics and jump to your extension entry. A little goodie: The table will automatically expand to check all of your download numbers.

##How does it work?
The [Brackets Extension Registry](https://brackets-registry.aboutweb.com/) has an unofficial API for download statistics. We were inspired by [this tweet](https://twitter.com/brktsextensions/status/481858349642682368) and want to provide a beautiful overview over all extension downloads.

There is a PHP Script on [our servers](http://wikunia.de) that uses the unofficial API with this cURL statement:

```curl -i -H "Accept: application/json" https://brackets-registry.aboutweb.com/registryList```

[This site](http://konstantinkobs.github.io/BracketsExtensionStats/) uses the results and renders them in a beautiful way.

##Resources
This site was built with awesome projects by other people.

- [Kube](http://imperavi.com/kube/) as a CSS framework
- [jQuery](http://jquery.com/) for AJAX calls and DOM manipulation
- [handlebars.js](http://handlebarsjs.com/) for templating
- [HINT.css](http://kushagragour.in/lab/hint/) for the tooltips
- [SpinKit](https://github.com/tobiasahlin/SpinKit) for the loading animation