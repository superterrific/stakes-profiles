---
title: 'Accessibility Statement'
layout: 'layouts/page.html'
permalink: "/accessibility-statement/"
---

This site is committed to ensuring that it’s accessible to all, regardless of technology or ability.

The [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. This site strives to conform to WCAG 2.1 level AA.

This site has been built using W3C standards for HTML and CSS. Any person using a past, present, or future browser that honors these standards should be capable of navigating this site.

In addition to being tested on modern browsers, this site has been checked for screen reader ease of use using VoiceOver with Safari on Mac. It has also been audited using [WAVE](https://wave.webaim.org/) and [ARC Toolkit](https://www.tpgi.com/arc-platform/arc-toolkit/) as well as checked manually.

## Known issues
The interactive charts on this site are built using [Google Charts](https://developers.google.com/chart/) and there are at least two major accessibility issues with them.

1. They are not accessible via keyboard.
2. Screen readers have to announce a large amount of extraneous information before announcing the data.

### Information for screen reader users
There are two major elements to each chart.

1. Graphical representation of the chart.
2. Tabular representation of the data within the chart.

Unfortunately the charts are structured to announce the graphical representation of the chart before the tabular data. This results in the screen reader announcing "an image" for each graphical element in the chart, including lines, ticks, bars, etc.

In some cases this will be upwards of 50 images announced as "an image" before the data is announced. And not all of the the chart types have a tabular representation of the data. The line charts used for running styles do not announce data.

Since this data is coming Google I don't have access to change the order or hide the images from screen readers so that only the tabular data is announced.

I considered hiding the charts from screen readers all together, but don't currently have the time to replicate all the data to provide a better screen reader experience. If you're using a screen reader and feel it's a better experience to hide the charts without providing the data I'd love to hear your thoughts.

You can contact me [via email with this form](https://airtable.com/shrIUn5ZgJS5yWBqR) or [file an issue](https://github.com/superterrific/stakes-profiles/issues) at GitHub.
