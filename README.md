# Omegle Geolocation

Geolocate people in [Omegle](https://www.omegle.com/) only using JavaScript. A fork from [Omegle IP Location Finder](https://gist.github.com/mattupham/8db8da9662dca830ec81b43b30eb8a6d).

## Usage

Watch the [YouTube tutorial](https://youtu.be/fN9cWpY5zUc) or follow the next steps:

1. Create an [IP Geolocation](https://ipgeolocation.io/) account and get an **API key**.
2. Replace `<YOUR API KEY HERE>` with your **API key** in [file geolocate.js, line 2](./geolocate.js#L2). Then copy the new file content.
3. In [Omegle](https://www.omegle.com/), open the console and paste the previous copied code.
4. Enter to a video chat and check output in console.

## Warning

> :warning: Disable any type of ad blocker to avoid *net::ERR_FAILED*.
>
> :warning: The maximum number of request are defined in the [API pricing section](https://ipgeolocation.io/pricing.html).
