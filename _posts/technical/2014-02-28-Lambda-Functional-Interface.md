---
layout: post
category: technical
title: Lambda Expressions with Functional Interface 
tags: [java8,lambda expressions]
---

<p>Java was invented in 1990s purely as object-oriented programming language. However before object oriented there were functional programming languages but their solely usefulness are mainly in scientific and academic purposes. Nowsday FP has becoming mainstream hype because it is well fit in concurrent and event-driven paradigm. </p>

<p>Objects are dying? well I would say they are the foundation of most of the software and I personally believe that as pragmatic programmer we should pick the optimal solutions based on problems we're solving. Blending OO and FP is might be the winning solution in the future.</p>

<!-- read more -->

<p>That's reason why this post I try to get everyone including myself to embrace what's coming in this java8. Yes I will talk about Lambda expressions.</p>

<p>lambda expressions with Functional Interface</p>

<p>It's block of code which can be transformed to <a target="_blank" href="https://docs.oracle.com/javase/8/docs/api/java/lang/FunctionalInterface.html">functional interface</a></p>

<p>
	<code class="prettyprint">
@FunctionalInterface
public interface FunctionalInterfaceT1 {
    public void run();
}	
	</code>		
	
	<code class="prettyprint">
//Normal work flow before java 8	
doworkFunctionalInterface(new FunctionalInterfaceT1() {
    @Override
    public void run() {
        System.out.print("Hello Lambda!");
    }
});

//With Lambda Expressions
doworkFunctionalInterface(() -> System.out.println("Hello Lambda!"));

public static void doworkFunctionalInterface(FunctionalInterfaceT1 functionalInterfaceT1) {
        functionalInterfaceT1.run();
}
	</code>	
</p>

<p>
	This is just a brief example of using lambda expressions implementing Functional Interface. You can see how short sharp sweet it can help to decrease such a boilerplate and in term of readable code, it's easier as well.
</p>

<p>
	Stay tuned for the next coming Lambda Expressions series
</p>