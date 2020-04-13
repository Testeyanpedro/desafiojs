function Cadastrar(){

    function criarAluno(nome, endereco, email,telefone){
        return {nome,endereco,email,telefone}
      }
      const aluno1 = criarAluno(document.getElementById("nome").value,document.getElementById("endereco").value,document.getElementById("email").value,document.getElementById("telefone").value );
     function mostrarDados(){
        //this -> faz referencia ao objeto nesse local/conteudo
         document.getElementById("mostrar").value=`${aluno1.nome} - ${aluno1.endereco} - ${aluno1.email}-${aluno1.telefone}`;
       ;
      }
      mostrarDados();
    };