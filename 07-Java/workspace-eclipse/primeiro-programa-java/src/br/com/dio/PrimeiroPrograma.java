package br.com.dio;

import java.util.Scanner;

import br.com.dio.model.Gato;

public class PrimeiroPrograma {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		System.out.print("Digite seu nome: ");
		String nome = scan.nextLine();
		System.out.println("Hello! " + nome + "!");
		scan.close();
		
		Gato gato = new Gato();
		Livros livros = new Livros();
		
		gato.setNome("Sombra");
		gato.setCor("Preto");
		gato.setIdade(2);
		
		System.out.println(gato);
		System.out.println(livros);
	}

}

class Livros {
	private String nome;
	private String numPaginas;
}