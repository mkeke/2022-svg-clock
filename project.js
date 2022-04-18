const project = {

    defaults: {
        pageTitle: "SVG Clock",
        dest: "svg-clock",
    },
    
    versions: {
        v1: {
            SVGDigit: "",
        },
    },

    render: function(key, el) {

        let d = '<svg viewBox="0 0 400 600">';
        for(let x=0; x<4; x++) {
            for(let y=0; y<6; y++) {
                d += `<circle cx="${x*100+50}" cy="${y*100+50}" r="49" />`;
            }
        }
        d += '<g>';
        for(let x=0; x<4; x++) {
            for(let y=0; y<6; y++) {
                d += `<path d="M${x*100+50},${y*100+50} h50"/>`;
                d += `<path d="M${x*100+50},${y*100+50} h50"/>`;
            }
        }
        d += '</g>';
        d += '</svg>';

        el.SVGDigit = d;

        return el;
    },
};

module.exports = project;
