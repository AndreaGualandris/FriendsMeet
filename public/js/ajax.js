
let socket = io();


function my_fetch() {

    console.log("start fetching")

    let signUpButt = document.querySelector('#signUp');
    let loginButt = document.querySelector('#login');

    signUpButt.addEventListener('click', (e) => {

        e.preventDefault();
        let asideL = document.querySelector('.asideL')
        let htmlSignUP = ejs.views_signUp();
        clear_main();
        asideL.insertAdjacentHTML('afterend', htmlSignUP);

        document.location.hash = '#signUp'

        signup_listener()

    })

    loginButt.addEventListener('click', (e) => {

        e.preventDefault();
        generate_login();
    })

    function generate_login() {

        let asideL = document.querySelector('.asideL')
        let htmlLogin = ejs.views_login();

        clear_main();
        asideL.insertAdjacentHTML('afterend', htmlLogin);

        document.location.hash = '#login'

        login_listener()
    }

    function signup_listener() {
        let submitButt = document.querySelector('#suButton')
        let form = document.querySelector("form");
        let asideL = document.querySelector('.asideL')

        submitButt.addEventListener('click', (e) => {
            e.preventDefault();

            let body = new FormData(form);

            if (body.get("nickname")
                && body.get("name")
                && body.get("surname")
                && body.get("age")
                && body.get("password")
            ) {
                nickname = body.get('nickname');
                console.log(body.get('nickname'));
                fetch('/signup/' + nickname, { method: 'GET', headers: { 'Accept': 'application/json' } })
                    .then(res => { return res.json() })
                    .then(resp => {
                        if (!resp) {
                            console.log(resp)
                            fetch("/signup", { method: "POST", body })
                                .then(res => {
                                    return res.json();
                                })
                                .then(result => {
                                    console.log(result);

                                    swal({
                                        title: "Account created successfully",
                                        text: "Nickname: " + body.get('nickname'),
                                        icon: "success",
                                    })

                                    let html = ejs.views_index()
                                    clear_main()
                                    asideL.insertAdjacentHTML("afterend", html);
                                    let accountHtml = document.querySelector(".account")        //body.get('nickname').charAt(0).toUpperCase() + body.get('nickname').slice(1) 
                                    accountHtml.innerHTML = `<div class="account">
                                            <span id="nick" style="font-family: 'Righteous', cursive; color:white; font-size:30px"> ` + body.get('nickname') + `</span> </div>`

                                    home_listeners()
                                    document.location.hash = ""
                                })
                        }
                        else {
                            swal({
                                title: "The nickname is already used",
                                icon: "warning",
                                dangerMode: true,
                            })
                        }
                    })
            }
            else {
                swal({
                    title: "Please enter all fields",
                    icon: "error",
                    dangerMode: true,
                })
            }
        })
    }


    function login_listener() {
        let loginButt = document.querySelector('#suButton')
        let form = document.querySelector(".forms");
        let asideL = document.querySelector('.asideL')

        loginButt.addEventListener('click', (e) => {
            e.preventDefault();

            let body = new FormData(form);
            console.log(body);

            if (body.get("nickname")
                && body.get("password")) {

                fetch("/login", { method: 'POST', body: body })
                    .then(res => {
                        return res.json();
                    }).catch(err => {
                        console.error(err);
                    })
                    .then(result => {

                        if (result) {
                            swal({
                                title: "You are logged in!",
                                text: "Nickname: " + body.get('nickname'),
                                icon: "success",
                            })
                            let html = ejs.views_index()
                            clear_main()
                            asideL.insertAdjacentHTML("afterend", html);
                            let accountHtml = document.querySelector(".account")                //body.get('nickname').charAt(0).toUpperCase() + body.get('nickname').slice(1) 
                            accountHtml.innerHTML = `<div class="account">  
                                            <span id="nick" style=" font-family: 'Righteous', cursive; color:white; font-size:30px"> ` + body.get('nickname') + `</span> </div>`
                            home_listeners()
                            document.location.hash = ""
                        }
                        else {
                            swal({
                                title: "Nickname or Password is incorrect",
                                icon: "error",
                                dangerMode: true,
                            })
                        }
                    })
            }
            else {
                swal({
                    title: "Please enter all fields",
                    icon: "error",
                    dangerMode: true,
                })
            }
        })

        home_listeners()
    }

    function clear_main() {
        let main = document.querySelector("main");
        if (main)
            main.remove();
    }


    function removeAccountName() {
        let htmlAccount = document.querySelector(".account")

        if (htmlAccount) {
            htmlAccount.style.display = "none";
        }
    }

    function clear_searchbar() {
        let searchbar = document.querySelector(".search");
        if (searchbar)
            searchbar.remove();
    }

    function generate_searchBar() {
        if (!document.querySelector(".search")) {
            let contain = document.querySelector(".contain")
            let searchbar = ejs.views_includes_searchBar()
            contain.insertAdjacentHTML("beforeBegin", searchbar);
        }
    }

    function generate_navbar() {
        if (!document.querySelector(".navbar")) {
            let header = document.querySelector("header")
            let navbar = ejs.views_includes_navbar()
            header.insertAdjacentHTML("afterend", navbar)
        }
    }

    function generate_page_create() {

        let header = document.querySelector("header")
        let asideL = document.querySelector(".asideL")
        let navbar = ejs.views_includes_navbar()
        let html = ejs.views_create()

        document.location.hash = '#create'
        clear_main()

        header.insertAdjacentHTML("afterend", navbar)
        asideL.insertAdjacentHTML("afterend", html);

        window.onbeforeunload = function () {
            return "Are you sure you want to refresh? Think of the kittens!";
        }

        navbar_listeners()

        submit_listener()

    }

    function generate_main_page_create() {

        generate_navbar()

        let asideL = document.querySelector(".asideL")
        let html = ejs.views_create()

        document.location.hash = '#create'
        clear_main()

        asideL.insertAdjacentHTML("afterend", html);

        window.onbeforeunload = function () {
            return "Are you sure you want to refresh? Think of the kittens!";
        }
        submit_listener()
    }

    function generate_page_search() {
        let header = document.querySelector("header")
        let contain = document.querySelector(".contain")
        let asideR = document.querySelector(".asideR")
        let navbar = ejs.views_includes_navbar()
        let searchbar = ejs.views_includes_searchBar()
        let html = ejs.views_search({ events: null })

        document.location.hash = '#search'
        clear_main()

        header.insertAdjacentHTML("afterend", navbar)
        contain.insertAdjacentHTML("beforeBegin", searchbar);
        asideR.insertAdjacentHTML("beforeBegin", html)

        filter_event_listener()

        navbar_listeners()
    }

    function generate_main_page_search() {

        generate_searchBar()

        let asideR = document.querySelector(".asideR")
        let html = ejs.views_search({ events: null })

        document.location.hash = '#search'
        clear_main()

        asideR.insertAdjacentHTML("beforeBegin", html)

        filter_event_listener()
    }

    function generate_page_featured() {

        let asideL = document.querySelector(".asideL")
        let header = document.querySelector("header")

        fetch('/events', { method: 'GET', headers: { 'Accept': 'application/json' } })
            .then((res) => {
                if (res.status >= 400) {
                    throw new Error(res.status);
                }
                return res.json()
            })
            .then((result) => {

                if (result) {
                    document.location.hash = '#featured'

                    let navbar = ejs.views_includes_navbar()
                    let html = ejs.views_featured({ events: result })

                    clear_main()

                    header.insertAdjacentHTML("afterend", navbar)
                    asideL.insertAdjacentHTML("afterend", html);

                    event_listener()

                    navbar_listeners_deleteList()
                    navbar_listeners()
                }
            })
    }

    function navbar_listeners_deleteList() {

        let a = document.querySelectorAll(".navbar a")
        a.forEach(link => link.addEventListener('click', function (e) {
            let asideList = document.querySelector('.asideList')
            let htmlAsideR = ejs.views_includes_asideR()
            let main = document.querySelector("main");
            if (asideList) {
                asideList.remove()
                main.insertAdjacentHTML('afterend', htmlAsideR)
            }
        }))
    }

    function generate_main_page_featured() {

        generate_navbar()
        let asideL = document.querySelector(".asideL")

        fetch('/events', { method: 'GET', headers: { 'Accept': 'application/json' } })
            .then((res) => {
                if (res.status >= 400) {
                    throw new Error(res.status);
                }
                return res.json()
            })
            .then((result) => {
                if (result) {
                    document.location.hash = '#featured'

                    let html = ejs.views_featured({ events: result })
                    clear_main()
                    asideL.insertAdjacentHTML("afterend", html);

                    event_listener()
                }
            })
    }

    function generate_page_myevents() {

        let span = document.querySelector(".account #nick")
        let asideL = document.querySelector(".asideL")
        let header = document.querySelector("header")
        let navbar = ejs.views_includes_navbar()
        let nickname = span.innerHTML.trim()

        if (span) {

            fetch('/myevents/' + nickname, { method: 'GET', headers: { 'Accept': 'application/json' } })
                .then(response => { return response.json() })
                .then(res => {
                    document.location.hash = '#myevents'
                    clear_main()

                    res.nickname = nickname
                    html_myevents = ejs.views_myevents(res)
                    header.insertAdjacentHTML("afterend", navbar)
                    asideL.insertAdjacentHTML("afterend", html_myevents);
                    event_listener()
                    navbar_listeners()
                })
        }
        else {

            swal({
                title: "Log In before",
                icon: "error",
                dangerMode: true,
            })
        }
    }
    navbar_listeners_deleteList()

    function generate_main_page_myevents() {
        let asideL = document.querySelector(".asideL")
        let span = document.querySelector(".account #nick")
        let nickname = span.innerHTML.trim()

        fetch('/myevents/' + nickname, { method: 'GET', headers: { 'Accept': 'application/json' } })
            .then(response => { return response.json() })
            .then(res => {

                generate_navbar()

                document.location.hash = '#myevents'
                clear_main()

                res.nickname = nickname
                html_myevents = ejs.views_myevents(res)
                asideL.insertAdjacentHTML("afterend", html_myevents);
                event_listener()
            })
    }

    function home_listeners() {

        document.getElementById("page_search").addEventListener('click', (e) => {

            e.preventDefault();
            removeAccountName();
            generate_page_search();

        })


        document.getElementById("page_featured").addEventListener('click', (e) => {

            e.preventDefault();
            removeAccountName();
            generate_page_featured();

        })


        document.getElementById("page_create").addEventListener('click', (e) => {

            e.preventDefault();
            removeAccountName();
            generate_page_create();

        });

        document.getElementById("page_myevents").addEventListener('click', (e) => {

            e.preventDefault();
            let span = document.querySelector(".account #nick")
            if (span) {
                removeAccountName();
            }
            generate_page_myevents();
        });

    }

    home_listeners()

    function filteredEvents(filter) {

        let asideL = document.querySelector(".asideL");

        fetch('/events/search' + filter, { headers: { 'Accept': 'application/json' } })
            .then((result) => {
                return result.json()
            })
            .then((events) => {
                console.log(events)
                let html = ejs.views_search({ events: events })
                clear_main()
                asideL.insertAdjacentHTML("afterend", html)
                event_listener()

            }).catch(err => {
                console.error(err);
            });
    }


    function filter_event_listener() {
        let input = document.getElementById('s')
        input.addEventListener('input', (event) => {
            event.preventDefault();
            if (input.value.toLowerCase() != "")
                filteredEvents('?search=' + input.value.toLowerCase());
            else {
                let html = ejs.views_search({ events: null })
                let asideR = document.querySelector(".asideR")
                clear_main()
                asideR.insertAdjacentHTML("beforebegin", html)
            }
            let asideList = document.querySelector('.asideList')
            let htmlAsideR = ejs.views_includes_asideR()
            let main = document.querySelector("main");
            if (asideList) {
                asideList.remove()
                main.insertAdjacentHTML('afterend', htmlAsideR)
            }
        })
    }

    function submit_listener() {
        let asideL = document.querySelector(".asideL")
        let submit = document.querySelector("#suButton")
        let form = document.querySelector("form");
        let span = document.querySelector(".account #nick")

        submit.addEventListener("click", (event) => {

            if (span) {
                let nickname = span.innerHTML

                event.preventDefault();
                let body = new FormData(form);

                if (body.get("typeEvent")
                    && body.get("location")
                    && body.get("num")
                    && body.get("age")
                    && body.get("cost")
                    && body.get("level")
                    && body.get("date")
                    && body.get("cover")) {

                    body.append("creator", nickname.trim())
                    body.append("listNick", nickname.trim())

                    fetch("/events", { method: "POST", body: body })
                        .then(res => {
                            return res.json();
                        })
                        .then(result => {
                            let html = ejs.views_featured({ events: result })
                            clear_main()
                            asideL.insertAdjacentHTML("afterend", html);
                            event_listener()
                            document.location.hash = "#featured"
                        })
                }
                else {
                    swal({
                        title: "Please enter all fields",
                        icon: "warning",
                        dangerMode: true,
                    })
                }
            } else {
                event.preventDefault();

                swal({
                    title: "Before creating an event you must login",
                    icon: "error",
                    dangerMode: true,
                    buttons: true
                }).then(ok => {
                    if (ok)
                        window.location = "/"
                })
            }
        })
    }



    function event_listener() {
        let a = document.querySelectorAll(".home a")
        a.forEach(link => link.addEventListener('click', function (e) {
            e.preventDefault();

            let span = document.querySelector(".account #nick")

            if (!span) {
                swal({
                    title: "Before you must log in",
                    icon: "error",
                    dangerMode: true,
                    buttons: true
                }).then(ok => {
                    if (ok)
                        window.location = "/"
                })
            } else {
                let id = e.currentTarget.href.split('/event/')[1]

                fetch('/event/' + id, { method: 'GET', headers: { 'Accept': 'application/json' } })
                    .then(res => { return res.json() })
                    .then(result => {

                        let html_event = ejs.views_event({ event: result })
                        let asideL = document.querySelector(".asideL")

                        document.location.hash = '#event/' + id
                        clear_main()

                        asideL.insertAdjacentHTML("afterend", html_event);
                        listNick_genrator(result.listNick);
                        navbar_listeners_deleteList()

                        let span = document.querySelector(".account #nick")

                        if (result['creator'] != span.innerHTML.trim()) {
                            let buttonJoin = document.querySelector(".formJoin input")
                            let formEdit = document.querySelector(".formEdit")
                            let formDelete = document.querySelector(".formDelete")

                            formEdit.remove()
                            formDelete.remove()

                            if (result.listNick.includes(span.innerHTML.trim())) {

                                buttonJoin.value = "Disjoin"
                                join_disjoin_listener();
                            }
                            else {

                                let numMax = result.num
                                let numList = result.listNick.length

                                if (numMax > numList) {

                                    join_disjoin_listener();

                                } else {
                                    buttonJoin.addEventListener('click', (e) => {
                                        e.preventDefault()
                                    })
                                }
                            }
                        } else {
                            let formJoin = document.querySelector(".formJoin")
                            formJoin.remove()
                            buttDelete_listener()

                            edit_listener()
                        }
                    })
            }
        }))
    }


    function join_disjoin_listener() {                                  // --incremenet and decrement num of people in event
        let buttonJoin = document.querySelector(".formJoin input")
        let span = document.querySelector(".account #nick")

        buttonJoin.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e.currentTarget)

            if (e.currentTarget.value == "Disjoin") {
                fetch('/disjoin/' + buttonJoin.getAttribute("data-id") + '/' + span.innerHTML.trim(), { method: 'PUT', headers: { 'Accept': 'application/json' } })
                    .then(res => { return res.json() })
                    .then(result => {
                        console.log(result)

                        listNick_genrator(result);
                        buttonJoin.value = "Join Us"

                        let num = document.querySelector("#numPersons")
                        let numMax = num.getAttribute("data-num")
                        num.innerHTML = result.length + "/" + numMax

                        //socket
                        let id = buttonJoin.getAttribute("data-id")
                        let numPersons = result.length
                        socket.emit('disjoin', id, numPersons, span.innerHTML.trim());
                    })

            } else if (e.currentTarget.value == "Join Us") {
                fetch('/join/' + buttonJoin.getAttribute("data-id") + '/' + span.innerHTML.trim(), { method: 'PUT', headers: { 'Accept': 'application/json' } })
                    .then(res => { return res.json() })
                    .then(result => {

                        listNick_genrator(result);
                        buttonJoin.value = "Disjoin"


                        let num = document.querySelector("#numPersons")
                        let numMax = num.getAttribute("data-num")

                        num.innerHTML = result.length + "/" + numMax

                        //socket
                        let id = buttonJoin.getAttribute("data-id")
                        let numPersons = result.length
                        socket.emit('join', id, numPersons, span.innerHTML.trim());

                    })
            }
        })
    }


    function listNick_genrator(listNickname) {
        let asideR = document.querySelector(".asideR")
        asideR.remove()
        let html_asideR_listNick = ejs.views_listNick({ event: { listNick: listNickname } })
        let main = document.querySelector("main");

        main.insertAdjacentHTML("afterend", html_asideR_listNick)
    }


    function edit_listener() {
        let bEdit = document.querySelector(".edit");

        bEdit.addEventListener("click", function (e) {
            e.preventDefault();

            fetch('/events/edit/' + bEdit.getAttribute("data-id"), { method: "GET", headers: { "Accept": "application/json" } })
                .then(res => {
                    return res.json();
                })
                .then(result => {

                    let asideL = document.querySelector(".asideL")
                    let html_edit = ejs.views_edit({ event: result });

                    clear_main()
                    asideL.insertAdjacentHTML("afterend", html_edit)

                    edit_PUT_listener();

                })



        })
    }

    function edit_PUT_listener() {

        let editPut = document.querySelector("#editPut")

        editPut.addEventListener("click", function (e) {
            e.preventDefault()

            let asideL = document.querySelector(".asideL")
            let form = document.querySelector('.forms')
            let body = new FormData(form);
            console.log(body)
            fetch('/events/' + editPut.getAttribute("data-id"), { method: "PUT", headers: { 'Accept': 'application/json' }, body })
                .then(res => {
                    return res.json();
                })
                .then(result => {
                    clear_main()
                    html_event = ejs.views_event({ event: result })
                    asideL.insertAdjacentHTML("afterend", html_event)

                    let formJoin = document.querySelector(".formJoin")
                    formJoin.remove()
                    edit_listener()
                    buttDelete_listener()

                })
        })
    }

    function buttDelete_listener() {
        let bDelete = document.querySelector("#delete")

        bDelete.addEventListener("click", function (e) {
            e.preventDefault()

            fetch("/events/" + bDelete.getAttribute("data-id"),
                {
                    method: "DELETE",
                    headers: { "Accept": "application/json" }
                })
                .then(result => {
                    console.log(result)
                    generate_main_page_myevents();

                    let asideList = document.querySelector('.asideList')
                    let htmlAsideR = ejs.views_includes_asideR()
                    let main = document.querySelector("main");
                    if (asideList) {
                        asideList.remove()
                        main.insertAdjacentHTML('afterend', htmlAsideR)
                    }
                })
        })
    }


    function navbar_listeners() {

        let a = document.querySelectorAll(".navbar a")
        a.forEach(link => link.addEventListener('click', function (e) {
            if (e.currentTarget.id != "home") {

                e.preventDefault();
                switch (e.currentTarget.id) {
                    case "page_create":
                        clear_searchbar()
                        generate_main_page_create();
                        break;
                    case "page_featured":
                        clear_searchbar()
                        generate_main_page_featured();
                        break;
                    case "page_search":
                        generate_main_page_search();
                        break;
                    case "page_myevents":
                        clear_searchbar()
                        generate_main_page_myevents();
                        break;
                }
            }
        }
        ))
    }


    // ----------- SOCKET ------------- //

    socket.on('newEvent', () => {

        console.log("[+] New Event added: ");
        console.log("[#] Your current hash is: ", document.location.hash)

        if (document.location.hash == "#featured")
            generate_main_page_featured()
        else if (document.location.hash == "#myevents")
            generate_main_page_myevents();
    })

    socket.on('deleteEvent', (id, creator) => {

        console.log("[+] Event deleted: ");
        console.log("[#] Your current hash is: ", document.location.hash)

        if (document.location.hash == "#featured")
            generate_main_page_featured()
        if (document.location.hash == "#event/" + id) {
            generate_main_page_featured()

            let nick = document.querySelector(".account #nick")
            let nickname = nick.innerHTML.trim()
            console.log(nickname)
            console.log(creator)
            if (nickname != creator) {
                swal({
                    title: "The event you were watching has just been cancelled",
                    icon: "warning",
                    dangerMode: true,
                })
            }
        }
        if (document.location.hash == "#myevents")
            generate_main_page_myevents()

    })

    socket.on('updateEvent', (result) => {

        console.log("[+] New Event updated: id = " + result._id);
        console.log("[#] Your current hash is: ", document.location.hash)

        if (document.location.hash == ("#event/" + result._id)) {
            console.log("[+o+] updatato")
            let eventData = document.querySelector('#eventData')
            let eventLabels = document.querySelector('#eventLabels')
            eventData.remove()
            let htmlEvent = ejs.views_event1({ event: result })
            eventLabels.insertAdjacentHTML('afterend', htmlEvent)

            let title = document.querySelector('#titlEvent')
            title.innerHTML = result.typeEvent.charAt(0).toUpperCase() + result.typeEvent.slice(1)
        }
    })

    socket.on('join', (id, num, nickname) => {

        console.log("[+] New Person joined: ");
        console.log("[#] Your current hash is: ", document.location.hash)
        let idEvent;

        if (document.location.hash == "#myevents" || document.location.hash == "#featured" || document.location.hash == "#search") {
            change_num_page_event(id, num)
        }
        else if (document.location.hash == "#event/" + id) {
            let buttonJoin = document.querySelector(".formJoin input")
            let buttonEdit = document.querySelector(".formEdit input")
            if (buttonJoin) {
                idEvent = buttonJoin.getAttribute("data-id")
            }
            else if (buttonEdit) {
                idEvent = buttonEdit.getAttribute("data-id")
            }

            if (idEvent == id) {
                let elementNum = document.querySelector("#eventData #numPersons")
                elementNum.innerHTML = num + "/" + elementNum.innerHTML.split("/")[1]
                elementNum.setAttribute("data-persons", num)

                let asideR = document.querySelector(".asideList")
                let spanHTML = `<span class="asideList" style="display: list-item;" data-nick="${nickname}">${nickname}</span>`
                asideR.insertAdjacentHTML('beforeend', spanHTML);
            }
        }
    })

    socket.on('disjoin', (id, num, nickname) => {

        console.log("[-] New Person disjoined: ");
        console.log("[#] Your current hash is: ", document.location.hash)
        let idEvent;

        if (document.location.hash == "#myevents" || document.location.hash == "#featured" || document.location.hash == "#search") {
            change_num_page_event(id, num)
        }
        else if (document.location.hash == "#event/" + id) {
            let buttonJoin = document.querySelector(".formJoin input")
            let buttonEdit = document.querySelector(".formEdit input")
            if (buttonJoin) {
                idEvent = buttonJoin.getAttribute("data-id")
            }
            else if (buttonEdit) {
                idEvent = buttonEdit.getAttribute("data-id")
            }

            if (idEvent == id) {
                let elementNum = document.querySelector("#eventData #numPersons")
                elementNum.innerHTML = num + "/" + elementNum.innerHTML.split("/")[1]
                elementNum.setAttribute("data-persons", num)

                let nicknameDisjoin = document.querySelector(".asideList span[data-nick=" + nickname + "]")
                nicknameDisjoin.remove()

            }
        }
    })

    function change_num_page_event(id, num) {
        let a = document.querySelector(`a[data-id="${id}"] #numEventPerson`)
        a.innerHTML = num + "/" + a.innerHTML.split("/")[1]
    }


}


