const moviesMock = [
    {
        id: 'c5e749e3-4714-4d75-abf3-44f39720a05b',
        title: 'Cabiria',
        year: 1994,
        cover: 'http://dummyimage.com/112x240.png/ff4444/ffffff',
        description:
            'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        duration: 2058,
        contentRating: 'R',
        source: 'http://constantcontact.com/rutrum/nulla/tellus/in.json',
        tags: ['Drama|Romance', 'Adventure|Crime|Drama'],
    },
    {
        id: 'c09df62a-921d-42ad-b52a-255f841a11f2',
        title: 'Magnum Cop',
        year: 1988,
        cover: 'http://dummyimage.com/116x148.bmp/dddddd/000000',
        description:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        duration: 2179,
        contentRating: 'R',
        source:
            'http://nydailynews.com/mi/pede/malesuada/in/imperdiet/et/commodo.jpg',
        tags: ['Drama', 'Animation|Horror'],
    },
    {
        id: 'fe984eab-6b12-4a24-92be-cce854a5befa',
        title: 'Outpost',
        year: 2007,
        cover: 'http://dummyimage.com/172x180.bmp/ff4444/ffffff',
        description:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        duration: 2352,
        contentRating: 'R',
        source: 'http://istockphoto.com/odio/odio/elementum/eu/interdum.jpg',
        tags: ['Comedy', 'Drama'],
    },
    {
        id: '67ce5c43-c6be-4b5e-bf84-4a0d3554d8b0',
        title: 'Love and a Bullet',
        year: 2009,
        cover: 'http://dummyimage.com/165x134.bmp/dddddd/000000',
        description:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        duration: 1985,
        contentRating: 'PG-13',
        source: 'https://google.com.br/nisl/aenean/lectus.aspx',
        tags: ['Comedy', 'Comedy|Drama', 'Drama', 'Crime|Drama|Mystery'],
    },
    {
        id: '20a68475-0fc1-45e0-a6c9-fc817888ab17',
        title: 'Into Eternity',
        year: 2012,
        cover: 'http://dummyimage.com/242x230.png/dddddd/000000',
        description:
            'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
        duration: 1883,
        contentRating: 'PG',
        source: 'https://oakley.com/vestibulum/ante/ipsum/primis/in.aspx',
        tags: ['Comedy', 'Drama', 'Drama|War', 'Sci-Fi|Thriller', 'Animation'],
    },
    {
        id: 'a78af29f-e352-4aba-be0a-a6ea3e1feadf',
        title: 'Rock, The',
        year: 2008,
        cover: 'http://dummyimage.com/172x208.png/ff4444/ffffff',
        description:
            'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
        duration: 2246,
        contentRating: 'NC-17',
        source: 'https://merriam-webster.com/ipsum/primis/in/faucibus.js',
        tags: [
            'Action|Drama',
            'Comedy|Romance',
            'Comedy|Musical|Sci-Fi',
            'Documentary|Drama',
            'Comedy|Drama|Fantasy|Romance',
        ],
    },
    {
        id: '43fcdc8a-d6bf-44af-80c6-cb0f8b22a68a',
        title: 'One Point O',
        year: 1996,
        cover: 'http://dummyimage.com/229x192.bmp/dddddd/000000',
        description:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        duration: 2272,
        contentRating: 'R',
        source:
            'https://ning.com/magna/vulputate/luctus/cum/sociis/natoque.html',
        tags: ['Drama|Romance'],
    },
    {
        id: 'cdb9dd7a-96f8-4271-89bf-c086b46d54eb',
        title: 'Tattoo Nation',
        year: 2004,
        cover: 'http://dummyimage.com/147x190.png/dddddd/000000',
        description:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        duration: 1909,
        contentRating: 'PG-13',
        source: 'http://dailymail.co.uk/accumsan/odio/curabitur.aspx',
        tags: [
            'Adventure|Animation|Horror|Sci-Fi|Thriller',
            'Drama',
            'Action|Adventure|Fantasy',
            'Comedy|Horror',
        ],
    },
    {
        id: '55a431b1-280a-4271-8127-4f40d985849d',
        title: 'Catch That Kid',
        year: 1967,
        cover: 'http://dummyimage.com/196x160.bmp/cc0000/ffffff',
        description:
            'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
        duration: 1990,
        contentRating: 'PG-13',
        source: 'http://blinklist.com/tempus/semper/est/quam/pharetra.html',
        tags: [
            'Comedy|Romance',
            'Sci-Fi',
            'Action|Adventure|Drama',
            'Drama',
            'Documentary',
        ],
    },
    {
        id: 'c7105362-4a6c-446e-823e-e694081c2a17',
        title: 'Eat Pray Love',
        year: 2008,
        cover: 'http://dummyimage.com/249x206.bmp/cc0000/ffffff',
        description:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        duration: 2149,
        contentRating: 'G',
        source:
            'https://google.nl/quisque/arcu/libero/rutrum/ac/lobortis/vel.js',
        tags: ['Comedy', 'Drama', 'Comedy', 'Drama|Romance|Western', 'Comedy'],
    },
    {
        id: 'ee525e6b-f7d4-49c3-9635-a15964ce4e4d',
        title: 'Big Trouble',
        year: 2011,
        cover: 'http://dummyimage.com/167x207.png/dddddd/000000',
        description:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        duration: 1970,
        contentRating: 'NC-17',
        source: 'https://shutterfly.com/vulputate/vitae/nisl.aspx',
        tags: [
            'Comedy|Musical|Romance',
            'Crime|Drama',
            'Drama|Horror|Mystery',
            'Documentary',
            'Documentary',
        ],
    },
    {
        id: '75c033cb-1f2e-42bd-8034-2af4de081770',
        title: 'No',
        year: 1986,
        cover: 'http://dummyimage.com/142x190.png/cc0000/ffffff',
        description:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
        duration: 2115,
        contentRating: 'R',
        source: 'https://ftc.gov/ac/diam/cras.js',
        tags: ['Crime|Drama|Mystery', 'Drama', 'Comedy|Sci-Fi'],
    },
    {
        id: 'db19fe4b-b10b-4341-86bf-44176f1299ab',
        title: 'Promises',
        year: 2009,
        cover: 'http://dummyimage.com/245x149.bmp/cc0000/ffffff',
        description:
            'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        duration: 2028,
        contentRating: 'PG-13',
        source: 'http://archive.org/mi/sit/amet/lobortis/sapien/sapien/non.js',
        tags: ['Comedy', 'Adventure|Drama|Romance|War'],
    },
    {
        id: 'a8be2147-421f-4a3f-959e-4aa6da45dbb0',
        title: 'Erkan & Stefan 3',
        year: 2003,
        cover: 'http://dummyimage.com/143x229.png/dddddd/000000',
        description:
            'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        duration: 2393,
        contentRating: 'PG',
        source: 'http://google.it/in/imperdiet/et/commodo/vulputate.aspx',
        tags: [
            'Action|Crime|Drama',
            'Action|Comedy|Fantasy|Horror',
            'Action|Comedy',
            'Documentary',
            'Adventure|Fantasy',
        ],
    },
    {
        id: 'bed3f6d9-461d-4e1f-bc29-bea83ef1047e',
        title: 'Wet Parade, The',
        year: 2003,
        cover: 'http://dummyimage.com/129x155.png/dddddd/000000',
        description:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
        duration: 2459,
        contentRating: 'PG',
        source: 'http://booking.com/lacus/purus/aliquet/at.xml',
        tags: [
            'Comedy',
            '(no genres listed)',
            'Comedy|Drama|Romance',
            'Sci-Fi',
            '(no genres listed)',
        ],
    },
    {
        id: '4ac0f878-dd5c-4752-8c71-31a6afb37160',
        title: 'Dog Problem, The',
        year: 2006,
        cover: 'http://dummyimage.com/142x148.jpg/5fa2dd/ffffff',
        description:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
        duration: 1844,
        contentRating: 'NC-17',
        source: 'https://altervista.org/orci/eget/orci/vehicula.html',
        tags: [
            'Fantasy|Horror|Sci-Fi|Thriller',
            'Comedy|Crime',
            'Horror|Mystery|Thriller',
        ],
    },
    {
        id: 'c278b2e6-9203-45c8-a536-869e98cfa744',
        title: 'Blackballed: The Bobby Dukes Story',
        year: 1986,
        cover: 'http://dummyimage.com/195x204.jpg/5fa2dd/ffffff',
        description:
            'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        duration: 2191,
        contentRating: 'R',
        source: 'https://ezinearticles.com/at/turpis/a/pede/posuere.html',
        tags: [
            'Comedy',
            'Adventure|Animation|Children|Comedy',
            'Drama|Romance',
            'Documentary',
            'Drama',
        ],
    },
    {
        id: '47722473-9b4b-4c78-b74e-af25630d64b7',
        title: 'Black Room, The',
        year: 1998,
        cover: 'http://dummyimage.com/148x180.bmp/cc0000/ffffff',
        description:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
        duration: 2312,
        contentRating: 'PG-13',
        source: 'http://tripod.com/nibh/quisque/id/justo/sit/amet.json',
        tags: [
            'Horror|Thriller',
            'Drama|Fantasy|Romance',
            'Action|Adventure|Comedy',
            'Drama',
            'Drama|Romance',
        ],
    },
    {
        id: '9f7ee25c-17a2-4385-8a9f-6754776751f2',
        title: 'Year of the Yao, The',
        year: 2010,
        cover: 'http://dummyimage.com/168x165.png/dddddd/000000',
        description:
            'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
        duration: 2362,
        contentRating: 'R',
        source: 'http://psu.edu/sit/amet.js',
        tags: ['Drama', 'Crime|Drama|Film-Noir|Mystery'],
    },
    {
        id: '7e204860-7273-401a-b091-0b1317667f51',
        title: 'Adventures of a Dentist',
        year: 2011,
        cover: 'http://dummyimage.com/207x120.png/5fa2dd/ffffff',
        description:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
        duration: 1823,
        contentRating: 'R',
        source: 'https://blinklist.com/odio/donec/vitae/nisi/nam.aspx',
        tags: ['Documentary'],
    },
    {
        id: '5e244937-1d35-476d-9911-a2c944f01a57',
        title: 'Ghoulies IV',
        year: 1999,
        cover: 'http://dummyimage.com/123x155.jpg/ff4444/ffffff',
        description:
            'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        duration: 2143,
        contentRating: 'NC-17',
        source: 'https://homestead.com/non.html',
        tags: ['Action|Crime', 'Documentary', 'Drama', 'Drama|Thriller'],
    },
    {
        id: 'e2d514ac-d9a1-438c-b05d-c7ed6fe96094',
        title: 'Golden Christmas, A',
        year: 2002,
        cover: 'http://dummyimage.com/137x207.bmp/cc0000/ffffff',
        description:
            'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        duration: 2480,
        contentRating: 'PG',
        source:
            'http://chicagotribune.com/vel/pede/morbi/porttitor/lorem/id/ligula.js',
        tags: ['Comedy', 'Comedy'],
    },
    {
        id: '304cde36-455f-447d-87d5-9ba256bb7a10',
        title: 'Cold Showers (Douches froides)',
        year: 2011,
        cover: 'http://dummyimage.com/187x229.png/5fa2dd/ffffff',
        description:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
        duration: 2361,
        contentRating: 'PG',
        source: 'https://dion.ne.jp/nisl/aenean/lectus/pellentesque/eget.jsp',
        tags: ['Comedy|Drama', 'Comedy|Romance'],
    },
    {
        id: '79c787ff-635b-41ad-a657-5adaa69f6c57',
        title: 'Hara-Kiri: Death of a Samurai',
        year: 2002,
        cover: 'http://dummyimage.com/191x107.jpg/5fa2dd/ffffff',
        description:
            'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
        duration: 1916,
        contentRating: 'PG-13',
        source:
            'http://liveinternet.ru/turpis/elementum/ligula/vehicula/consequat/morbi.json',
        tags: ['Drama'],
    },
    {
        id: '33ba16d2-7882-4bcb-9b37-ca0fd3ddb0bd',
        title: 'Apostle, The',
        year: 2002,
        cover: 'http://dummyimage.com/195x186.png/ff4444/ffffff',
        description:
            'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        duration: 2208,
        contentRating: 'G',
        source: 'https://chron.com/rutrum/at/lorem.json',
        tags: ['Comedy', 'Comedy|Drama|Romance'],
    },
    {
        id: 'dd3f4018-0eaf-4d40-8779-093057f1de07',
        title: 'Stolen Collection, (Skradziona kolekcja)',
        year: 2003,
        cover: 'http://dummyimage.com/198x127.png/ff4444/ffffff',
        description:
            'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        duration: 2026,
        contentRating: 'R',
        source: 'https://ebay.co.uk/ipsum/integer/a/nibh.aspx',
        tags: [
            'Drama',
            'Romance',
            'Animation|Drama|Romance',
            'Comedy|Documentary',
            'Action|Adventure',
        ],
    },
    {
        id: '1ffb03b1-8e76-4ff1-a5d6-78a4e9e24068',
        title: 'The Winslow Boy',
        year: 1983,
        cover: 'http://dummyimage.com/127x184.png/cc0000/ffffff',
        description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        duration: 2265,
        contentRating: 'PG',
        source: 'http://tinypic.com/odio/porttitor.png',
        tags: [
            'Horror|Sci-Fi',
            'Documentary',
            'Drama|Fantasy|Romance|Sci-Fi',
            'Drama',
            'Comedy|Drama',
        ],
    },
    {
        id: 'c6d7d8fa-2b45-4d34-9400-541c0df1dd42',
        title: 'Domino',
        year: 2005,
        cover: 'http://dummyimage.com/109x175.png/cc0000/ffffff',
        description:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        duration: 1865,
        contentRating: 'G',
        source:
            'https://arstechnica.com/metus/vitae/ipsum/aliquam/non/mauris.png',
        tags: [
            'Drama|Fantasy|Mystery',
            'Drama|Film-Noir',
            'Comedy|Drama|Romance',
        ],
    },
    {
        id: 'b4eba9b5-1f95-4db4-aed3-ab6cca4cdafb',
        title: 'Highlander II: The Quickening',
        year: 1992,
        cover: 'http://dummyimage.com/135x123.bmp/5fa2dd/ffffff',
        description:
            'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        duration: 2062,
        contentRating: 'R',
        source:
            'http://bravesites.com/lacinia/aenean/sit/amet/justo/morbi.json',
        tags: ['Drama|Horror', 'Action|Drama|War'],
    },
    {
        id: 'a24d22c6-996b-4272-997b-30c2a5a20a9b',
        title: 'Our Paradise (Notre paradis)',
        year: 2011,
        cover: 'http://dummyimage.com/183x162.png/cc0000/ffffff',
        description:
            'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        duration: 2211,
        contentRating: 'PG-13',
        source: 'http://cargocollective.com/accumsan/tortor.jpg',
        tags: ['Comedy|Romance', 'Action|Thriller', 'Drama', 'Comedy|Romance'],
    },
    {
        id: '4214b2a2-5448-40d8-9ea1-032e122071e8',
        title: "Kawasaki's Rose ",
        year: 2002,
        cover: 'http://dummyimage.com/158x113.png/ff4444/ffffff',
        description:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        duration: 1831,
        contentRating: 'R',
        source: 'http://ebay.com/consectetuer/adipiscing/elit/proin.aspx',
        tags: ['Comedy|Drama'],
    },
    {
        id: '56d08dcc-304d-4f1b-8ec7-87c03e1f3519',
        title: 'Irina Palm',
        year: 2008,
        cover: 'http://dummyimage.com/128x149.bmp/5fa2dd/ffffff',
        description:
            'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        duration: 1806,
        contentRating: 'PG',
        source:
            'https://npr.org/lectus/suspendisse/potenti/in/eleifend/quam/a.json',
        tags: ['Comedy|Drama', 'Drama|Romance'],
    },
    {
        id: '68418ec7-d495-4fd4-9534-d30dd6ceaae3',
        title: 'Shepherd of the Hills, The',
        year: 2011,
        cover: 'http://dummyimage.com/218x119.png/dddddd/000000',
        description:
            'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
        duration: 2145,
        contentRating: 'PG',
        source: 'http://acquirethisname.com/cursus/vestibulum/proin.jsp',
        tags: [
            'Documentary',
            'Action|Comedy|Drama',
            'Adventure|Comedy|Drama',
            'Drama|Thriller',
        ],
    },
    {
        id: '0e11a34f-e7b3-4904-b3c2-e27a87c1950a',
        title: 'Big Heat, The',
        year: 2000,
        cover: 'http://dummyimage.com/205x131.bmp/cc0000/ffffff',
        description:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        duration: 1941,
        contentRating: 'PG',
        source: 'http://elpais.com/velit/eu/est/congue/elementum.jsp',
        tags: ['Drama|Romance'],
    },
    {
        id: '5aff12f6-da87-4a09-bae7-e4623239dc13',
        title: 'Magic Christmas Tree, The',
        year: 2007,
        cover: 'http://dummyimage.com/202x194.png/cc0000/ffffff',
        description:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
        duration: 2273,
        contentRating: 'G',
        source:
            'http://salon.com/volutpat/erat/quisque/erat/eros/viverra/eget.aspx',
        tags: ['Comedy|Romance', 'Action'],
    },
    {
        id: 'f9086a0e-7de4-4fa9-9fb9-3316e29e8d27',
        title: 'Phantom, The',
        year: 1992,
        cover: 'http://dummyimage.com/250x143.png/5fa2dd/ffffff',
        description:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        duration: 2433,
        contentRating: 'NC-17',
        source: 'https://is.gd/ligula/suspendisse.jpg',
        tags: ['Horror'],
    },
    {
        id: 'f3bd4a7f-0911-45ce-9491-71d1f927dbe2',
        title: 'Blood and Sand',
        year: 2007,
        cover: 'http://dummyimage.com/157x206.jpg/ff4444/ffffff',
        description:
            'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        duration: 2234,
        contentRating: 'G',
        source:
            'http://storify.com/quis/turpis/eget/elit/sodales/scelerisque/mauris.aspx',
        tags: [
            'Comedy',
            'Adventure|Animation|Fantasy',
            'Documentary',
            'Comedy|Romance',
        ],
    },
    {
        id: 'e9db9b64-20a5-4bee-b752-75295d3f0bfb',
        title: 'Proposal, The',
        year: 2004,
        cover: 'http://dummyimage.com/222x234.jpg/dddddd/000000',
        description:
            'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        duration: 1894,
        contentRating: 'PG-13',
        source: 'http://pcworld.com/luctus/et/ultrices.json',
        tags: ['Drama|Romance', 'Drama|Romance|War', 'Adventure|Drama'],
    },
    {
        id: '50eebb04-27cb-412e-ac30-3ef2d3e24c3e',
        title: 'Saving Silverman (Evil Woman)',
        year: 2001,
        cover: 'http://dummyimage.com/139x219.png/cc0000/ffffff',
        description:
            'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        duration: 2427,
        contentRating: 'PG-13',
        source: 'https://dailymail.co.uk/sapien/sapien.png',
        tags: [
            '(no genres listed)',
            'Drama',
            'Drama',
            'Documentary',
            'Comedy|Romance',
        ],
    },
    {
        id: '300b4d47-dd70-4671-93b0-ccd7308200f7',
        title: 'Parisian Love',
        year: 2001,
        cover: 'http://dummyimage.com/172x153.jpg/cc0000/ffffff',
        description:
            'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
        duration: 1802,
        contentRating: 'G',
        source: 'https://domainmarket.com/est/risus/auctor/sed/tristique/in.js',
        tags: [
            'Children|Comedy',
            'Drama|Romance',
            'Drama',
            'Crime|Drama',
            'Action|Animation|Children|Comedy|Fantasy',
        ],
    },
    {
        id: '8769425d-4837-4368-b6b6-d1f333478a2c',
        title: 'Hero (Ying xiong)',
        year: 1995,
        cover: 'http://dummyimage.com/192x143.png/cc0000/ffffff',
        description:
            'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        duration: 2324,
        contentRating: 'R',
        source: 'http://google.ru/ligula/sit/amet/eleifend/pede.png',
        tags: [
            'Horror',
            'Action|Adventure|Animation|Fantasy',
            'Adventure|Animation|Children|Comedy',
            'Drama',
        ],
    },
    {
        id: '68d5524c-d7c5-4d94-b393-d4dc31982d81',
        title: 'Brigadoon',
        year: 2006,
        cover: 'http://dummyimage.com/185x122.bmp/ff4444/ffffff',
        description:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        duration: 2272,
        contentRating: 'PG',
        source:
            'http://slideshare.net/tortor/duis/mattis/egestas/metus/aenean.js',
        tags: [
            'Drama|Fantasy',
            'Adventure|Comedy|Fantasy',
            'Comedy|Crime|Mystery',
            'Drama|War',
        ],
    },
    {
        id: '237826b8-6d62-4946-a347-81ab66e02e98',
        title: 'Far Off Place, A',
        year: 1964,
        cover: 'http://dummyimage.com/129x168.bmp/dddddd/000000',
        description:
            'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
        duration: 2351,
        contentRating: 'R',
        source:
            'http://yellowbook.com/convallis/eget/eleifend/luctus/ultricies.aspx',
        tags: [
            'Comedy|Drama',
            'Drama',
            'Comedy|Crime|Romance',
            'Drama|Romance',
        ],
    },
    {
        id: 'adcc46de-3e82-47f4-8951-8d3b8a708a99',
        title: 'Happy Tears',
        year: 2001,
        cover: 'http://dummyimage.com/167x105.jpg/ff4444/ffffff',
        description:
            'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        duration: 2350,
        contentRating: 'R',
        source: 'http://accuweather.com/ante.xml',
        tags: ['Action|Comedy|Sci-Fi', 'Drama', 'Comedy|Drama', 'Drama'],
    },
    {
        id: '9bc6dc39-887f-48f2-8aee-ba4a17715681',
        title: 'Topper',
        year: 1996,
        cover: 'http://dummyimage.com/146x231.bmp/cc0000/ffffff',
        description:
            'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        duration: 2417,
        contentRating: 'PG-13',
        source: 'https://ow.ly/hac.html',
        tags: ['Documentary', 'Action|Adventure|Fantasy|Musical|Romance'],
    },
    {
        id: '1773dfbd-623d-45a9-81ab-68ae6d030ecc',
        title: 'Hellraiser: Revelations',
        year: 2009,
        cover: 'http://dummyimage.com/245x210.bmp/5fa2dd/ffffff',
        description:
            'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        duration: 2475,
        contentRating: 'PG',
        source: 'https://microsoft.com/purus/aliquet/at/feugiat/non.json',
        tags: ['Documentary'],
    },
    {
        id: '10838039-2031-4fad-85ce-d1c8ac2dd82e',
        title: 'Breed, The',
        year: 1991,
        cover: 'http://dummyimage.com/227x100.png/5fa2dd/ffffff',
        description:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
        duration: 2331,
        contentRating: 'G',
        source:
            'http://zdnet.com/vulputate/ut/ultrices/vel/augue/vestibulum.jpg',
        tags: [
            'Documentary',
            'Comedy|Romance',
            'Action|Crime|Drama|Mystery|Thriller',
            'Drama',
            'Action|Crime|Drama',
        ],
    },
    {
        id: 'f0633c1c-ee19-428c-9aa7-5f1543ac2ac0',
        title: 'Next of Kin',
        year: 1987,
        cover: 'http://dummyimage.com/147x181.jpg/ff4444/ffffff',
        description:
            'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        duration: 1853,
        contentRating: 'PG',
        source: 'https://unicef.org/pede.html',
        tags: ['Comedy|Drama|Musical|Romance'],
    },
    {
        id: '4037bc86-f41d-4d6d-a0c7-8ed990e8e0b4',
        title: 'Blue Swallow (Cheong yeon)',
        year: 1999,
        cover: 'http://dummyimage.com/193x143.png/cc0000/ffffff',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        duration: 1984,
        contentRating: 'PG',
        source: 'http://cnbc.com/suscipit.xml',
        tags: ['Drama|Romance'],
    },
    {
        id: '1d8f58dd-b04f-4c34-8672-84fe7c982045',
        title: 'Here Comes Mr. Jordan',
        year: 2006,
        cover: 'http://dummyimage.com/149x229.bmp/cc0000/ffffff',
        description:
            'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        duration: 1969,
        contentRating: 'NC-17',
        source: 'https://google.de/quisque/id/justo/sit.aspx',
        tags: [
            'Drama',
            'Adventure|Animation|Children|Comedy|Fantasy',
            'Drama|Romance',
            'Comedy|Drama',
        ],
    },
];

const filteredMoviesMock = function (tag) {
    return moviesMock.filter((movie) => movie.tags.includes(tag));
};

class MovieServiceMocks {
    async getMovies() {
        return Promise.resolve(moviesMock);
    }
    async createMovies() {
        return Promise.resolve(moviesMock[0]);
    }
}

module.exports = { moviesMock, filteredMoviesMock, MovieServiceMocks };
