         var num = [];
        
        for(i=0; i<20; i++){
            num[i] = parseInt(prompt('Informe um número inteiro'));
        }
        document.write('<h2>Exercício para ler 20 números inteiros</h2>');
        document.write('<p>Os números informados foram:</p>' + num);

        var num1 = [];
        var num2 = [];
        
        for(i=0; i<12; i++){
            numero = parseInt(prompt('Informe um número'));
            if(numero > 50){
                num1.push(numero);
            }
            else{
                num2.push(numero);
            }
            }
        document.write('<h2>Exercício para ler 12 números</h2>');
        document.write('<p>Os números informados maiores que 50 foram:</p><strong>'+ num1 + '</strong>');
        document.write('<p>E os números informados menores que 50 foram:</p><strong>' + num2 + '</strong>');
            
        // Array para informações de inventário.
        var drofo = ['Anel da invisibilidade', 'Um par de botas mágicas', 'Um par de botas mágicas', 'Poção do sono', 'Poção da inocência', 'Poção da inocência'];
        var torper = ['Capa da invisibilidade', 'Pedra do despertar', 'Varinha das varinhas', 'Poção da inocência', 'Poção da mentira', 'Poção da mentira', 'Poção anti-inteligência'];
        
        //Coletando as informações do inventário de Drofo e Torper.
        document.write('<h2>Inventário inicial</h2> <strong>Drofo</strong>: ' + drofo.join(', ') + "<br><br>");
        document.write('<strong>Torper</strong>: ' + torper.join(', ') + "<br>");
        
        //Inventário do Torper: removendo uma poção da mentira e a pedra do despertar!
        torper.splice(4,1);
        torper.splice(1,1);
        
        //Inventário do Torper: adicionando um par de botas mágicas do Drofo, por um escudo mágico e uma espada mágica
        torper.push(drofo[1], 'Escudo mágico', 'Espada mágica');
    
        //Inventário do Drofo: Adicionaando um par de botas mágicas, ovo de dragão e uma coxinha 
        drofo.push('Um par de botas mágicas', 'Ovo de dragão', 'Coxinha');
    
        //Inventário do Drofo: removendo um par de botas mágicas e a poção do sono
        drofo.splice(1,1);
        drofo.splice(2,1);
    
        //Removendo a poção anti-inteligência do Torper
        torper.splice(4,1);
        
        //Imprimindo o novo inventário do Drofo e Torper
        document.write('<h2>Inventário atualizado</h2> <strong>Drofo</strong>: ' + drofo.join(', ') + "<br><br>");
        document.write('<strong>Torper</strong>: ' + torper.join(', '));
    