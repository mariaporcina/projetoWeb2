$$ = function (id) {
	return document.getElementById(id);
}
$ = function (name) {
	return document.getElementsByName(name)[0];
}

function save()
{

    console.log("Salvando Dados...");

    var name = $$("name");
    var email = $$("email");
    var username = $("username");
    var pass = $$("pass");


    var usuario = {};

    usuario.name = name.value;
    usuario.email = email.value;
    usuario.username = username.value;
    usuario.pass = pass.value;

    localStorage.setItem("usuario", JSON.stringify(usuario));

    console.log("Usuário "+usuario.username+" salvo com sucesso!")
    login(username);

    name.value = "";
    email.value = "";
    username.value = "";
    pass.value = "";
}

function get()
{
    console.log("Acessando dados...")

    username = $("username");
    pass = $("pass");

    var usuario = JSON.parse(localStorage.getItem("usuario"));


    username.value = usuario.username;
    pass.value = usuario.pass;
}

function login(username)
{
    alert("Usuário " + username + " cadastrado com sucesso!...");
        if (confirm("Se não houver mais cadastros a serem feitos você será redirecionado à página de Login Ok?"))
        {
            if(remember)
            {
                location.href = "../log-in/login.html";
                //get();
            }else
            {
                location.href = "../log-in/login.html";
            }
        }
}

var remember = function()
{
   if($$("ckb1").checked)
   {
        return true;
   }
   return false;    
}

var users = [];

		var Usuario = function (id, name, username, email, password) {
			this.id = id;
			this.name = name;
			this.username = username;
			this.email = email;
			this.password = password;
		}

		function isCadastrado(UsuarioProcurado) {

			for (const x of users) {
				if (x.name == UsuarioProcurado.name) {
					return true;
				}
			}
			return false;
		}

	

    function novoUsuario() 
    {

			var n = document.getElementById('name').value;
			var u = document.getElementsByName('username')[0].value;
			var e = document.getElementsByTagName('input')[2].value;
			var p = document.getElementById('pass').value;
			var usuario = new Usuario(users.length, n, u, e, p);
			if (n == "" || u == "" || e == "" || p == "") {
				alert("Por Favor Preencha todos os campos..")
			} else {
				if (isCadastrado(usuario)) {
					("Já existe um usuário cadastrado com esse mesmo nome...")
				 } else {
				
				 	save();
				}
			}

			return false;
    }
    
    function logar()
    {
        var username = $("username");
        var pass = $("pass");

        var usuario = JSON.parse(localStorage.getItem("usuario"));


       if(username.value == usuario.username && pass.value == usuario.pass)
       {
           alert(username.value+" Logado com sucesso... Aproveite as vantagens disso... Ou seja nada...");
           alert("Você será redirecionado para a página inical...")
           location.href="../../index.html";
       }
    }
