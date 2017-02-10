(function() {
    var app = angular.module('App', []);

    app.controller('StoreController', function(){
        this.repos = repos;
    });

    var repos = [{
        "index": 1,
        "company": "Anivet",
        "link": "http://www.bbc.co.uk/learningenglish/russian/features/6-minute-english",
        "about": "In aute Lorem exercitation sunt. Ad irure deserunt nisi est esse consectetur adipisicing minim. Ad sunt eiusmod occaecat eiusmod nostrud Lorem laborum ea dolor.\r\n",
    },
    {
        "index": 2,
        "company": "Kiosk",
        "link": "https://www.ted.com",
        "about": "Sunt id velit ex Lorem ex esse est amet ullamco minim dolor voluptate. Aliqua magna in cillum quis exercitation commodo ut aute enim aute consectetur. Labore fugiat esse consequat ut. Laboris qui cillum et laboris ex magna occaecat et veniam voluptate. Consequat amet deserunt non cillum consequat cupidatat quis proident. Voluptate elit velit exercitation culpa fugiat magna reprehenderit adipisicing sit duis excepteur.\r\n",
    },
    {
        "index": 3,
        "company": "Rosa Hancock",
        "link": "https://ru.coursera.org/learn/angular-js",
        "about": "Tempor excepteur id nulla aliqua sit laborum. Labore exercitation excepteur est ex consequat nostrud aliquip reprehenderit duis do excepteur officia enim. Fugiat ad eu et ipsum officia ullamco sunt proident quis minim veniam.\r\n",
    },
    {
        "index": 4,
        "company": "QUONK",
        "link": "https://docs.google.com/document/d/11J6hdErE6poSeRqv0BP8RDoXIznnfL8tZdzKvwDmO4c/pub",
        "about": "Ipsum incididunt nisi ad eu cillum veniam fugiat consectetur. Amet pariatur minim eu tempor eiusmod. Nulla esse eiusmod tempor ullamco aute nulla amet. Consectetur esse et labore labore Lorem amet ea ullamco in non aliqua. Anim non est ut sit aute amet culpa culpa eiusmod ex. Irure duis pariatur amet occaecat duis eu. Esse elit minim in dolor est.\r\n",
    },
    {
        "index": 5,
        "company": "KOFFEE",
        "link": "http://www.engvid.com/english-slang-how-to-talk-like-a-real-londoner/",
        "about": "Ad aliquip officia ut non nostrud minim excepteur cillum ad amet cupidatat eu sit velit. Qui occaecat veniam reprehenderit ex esse aute elit sunt est ullamco reprehenderit nulla. Quis ipsum id non aute laborum. Quis pariatur esse et eiusmod ex reprehenderit. Cupidatat pariatur consectetur deserunt amet culpa sit exercitation sunt aliquip aliquip excepteur ad.\r\n",
    },
    {
        "index": 6,
        "company": "MINGA",
        "link": "http://www.learn-angular.org",
        "about": "Sint excepteur esse elit Lorem qui voluptate elit occaecat Lorem Lorem nulla occaecat. Enim cillum fugiat consequat sint veniam ut anim ut ullamco est cillum cillum laborum. Laborum Lorem Lorem ad nulla consequat. Dolore in minim cupidatat deserunt cupidatat officia deserunt incididunt tempor. Consectetur officia sit officia ea dolor qui. Nisi laborum excepteur laboris ad elit mollit. Eu tempor exercitation enim ea nisi excepteur adipisicing sit pariatur anim enim dolore Lorem.\r\n",
    }]
})();
