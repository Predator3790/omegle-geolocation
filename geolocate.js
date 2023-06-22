// API key from the IP Geolocation API (https://ipgeolocation.io/)
const apiKey = '<YOUR API KEY HERE>';

// Show IP information from the IP Geolocation API
async function getLocation (ip) {
    let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;
    await fetch(url, {forceHTTPS: true}).then((response) => {
        response.json().then((json) => {
            let output = `${'-'.repeat(30)}\nIP: ${ip}\nCountry: ${json.country_name}\nState: ${json.state_prov}\nCity: ${json.city}\nDistrict: ${json.district}\nMap: https://www.google.com/maps?q=${json.latitude},${json.longitude}\n${'-'.repeat(30)}`;
            console.log(output);
        });
    });
}

// Get IP address when using P2P
window.oRTCPeerConnection = window.oRTCPeerConnection || window.RTCPeerConnection;
window.RTCPeerConnection = function (...args) {
    let pc = new window.oRTCPeerConnection(...args);
    pc.oaddIceCandidate = pc.addIceCandidate;
    pc.addIceCandidate = function (iceCandidate, ...rest) {
        let fields = iceCandidate.candidate.split(' ');
        let ip = fields[4];
        // console.log(iceCandidate.candidate);
        if (fields[7] === 'srflx') {
            getLocation(ip);
        }
        return pc.oaddIceCandidate(iceCandidate, ...rest);
    };
    return pc;
};
