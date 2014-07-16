---
layout: post
category: draft
title: Markdown in quick 5 minutes
tags: [markdown]
---
A First Level Header
====================

A Second Level Header
---------------------

Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.

The quick brown fox jumped over the lazy
dog's back.

### Header 3

> This is a blockquote.
> 
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote

Some of these words *are emphasized*.
Some of these words _are emphasized also_.

Use two asterisks for **strong emphasis**.
Or, if you prefer, __use two underscores instead__.

### Unordered List
* Candy.
* Gum.

  some explaination

* Booze.

### Ordered List
1. line1

   some explaination 

2. line2

### Hyperlink

This is an [example link](http://example.com).

This is an [example link](http://example.com "With a Title").

I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"

### Image Link

![Sydney Vivid](http://farm9.staticflickr.com/8121/8935833544_766556ef1f_c.jpg "Vivid Sydney")

### Code Style

I strongly recommend against using any `<blink>` tags.

I wish SmartyPants used named entities like `&mdash;`
instead of decimal-encoded entites like `&#8212;`.

	@FunctionalInterface
	public interface FunctionalInterfaceT1 {
	    public void run();
	}	

	//Normal work flow before java 8	
	doworkFunctionalInterface(new FunctionalInterfaceT1() {
	    @Override
	    public void run() {
	        System.out.print("Hello Lambda!");
	    }
	});

#### code with class 

~~~
@FunctionalInterface
public interface FunctionalInterfaceT1 {
    public void run();
}	

//Normal work flow before java 8	
doworkFunctionalInterface(new FunctionalInterfaceT1() {
    @Override
    public void run() {
        System.out.print("Hello Lambda!");
    }
});
~~~
{: .prettyprint}