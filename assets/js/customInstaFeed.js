$(document).ready(function() {
    
    var feed = new Instafeed({
        clientId: '2bd72f5af9ab4e5782ea45eb75da0577',
        accessToken: '231913168.1677ed0.36532ff45aad4989a668bb0799595c2e',
        get: 'user',
        userId: '231913168',
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        target: 'instafeed',
        sortBy: 'most-recent',
        limit: 6,
        links: true,
        template: '<div class = "col-lg-4 instaimg">' +
                '<a href = "{{link}}" title = "{{caption}}" target = "_blank">' +
                '<img class="gallery-image img-fluid" height="400" width="400" src = "{{image}}" alt = "{{caption}}"/></a></div>'
    });
    feed.run();
})

