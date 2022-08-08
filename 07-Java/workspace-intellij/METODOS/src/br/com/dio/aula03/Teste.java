package br.com.dio.aula03;

public class Teste {

//    public void verifica(int i){
//        if (i > 0) {
//            return "Maior que 1";
//        } else {
//            return "Menor que 0";
//        }
//    }

    public static String idade(int i) {
        if (i > 0) {
            return "Maior de idade";
        } else {
            return "Menor de idade";
        }
    }

    public int verificaIdade(int idade) {
        if (idade > 18) {
            return 18;
        } else {
            System.out.println(idade + " anos. Menor de idade.");
        }
        return idade;
    }

    public static void teste() {}

    public static void main(String[] args) {
        teste();
        idade(5);
        String g = Teste.idade(6);
        System.out.println(g);
    }
}
