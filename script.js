
      const cep = document.querySelector("#cep")

      const resultadoCampo = function(result){
        for(const campo in result){ // para cada result esta armazenando na variavel campó
          if(document.querySelector("#" + campo)){ // está selecionando o elemento pelo id
            document.querySelector("#" + campo).value = result[campo]
          }
           
        }
      }

      cep.addEventListener("blur", function(){
        const validaCep = cep.value.replace('-', '')
        fetch(`https://viacep.com.br/ws/${validaCep}/json/`)
          .then(function(response){
            return response.json()
          })
          .then(function(data){
            resultadoCampo(data)
          })
          .catch(function (e){
            alert('cep inválido')
          })
      })
    