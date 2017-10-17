---
layout: post
category: technical
title: Scala Night Ep16
tags: [scala,meetup]
---

<p>Once upon a time in Atlassian star, there are superheroes forming up elite team to research and make some advancement on Scala. They love functional programming and they just want everyone to appreciate their love in functional programming through Scala lang. This happens thousand years ago now it's ep. 16.</p>

<!-- read more -->

<p>Literally, this is my first time in this ScalaSyd meetup since I joined the club. The reason is so simple and dumb as my Google calendar clever enough locating BKK Time zone and it made my calendar starting at 3PM (in BKK) or 6PM(in SYD)   --- long pause here --- Eureka!!!
I have to admit there are lot of cool guys talking in alien language but it inspired me already. You're the first-time apprentice? You have to introduce yourself to the group and some shortly background of your power (most of the people express Java power I would say 95%)
For this episode it had been divided into 3 sessions</p>
 
<strong>Section one</strong>
<p>Briefly talking about ScalaDay2013 held in NYC June 10-12 and Eric made it available for everyone in a short, sharp, sweet replay back.</p>
<a target="_blank" href="http://www.slideshare.net/etorreborre/scala-days2013-proxyfactorybeandelegate">presentation</a>

<strong>Section two</strong>
<p>By Sidney who is Java dev for several years and turn into the dark side of the scala and really love FP (I can count at least 5 times up he said Scala is awesome!!!) in the sense that he transformed spring-mvc in the new way doing it in scala with FP. With normal Request-Response scenario where Request hitting Controller, Controller pass to Service layer, Service layer then query database with DAOs  layer and all the way back respectively reverse order to Controller as Response. In FP he talked about wrapping all of Service layer, DAOs as functions in simple term Controller.doGet(Service, DAO) where Service and DAO represent function. </p>
<a target="_blank" href="https://www.shek.id.au/scalasyd-jul13/">presentation</a>

<strong>Section three</strong>
<p>Last, Eric the man of hour showing up again and explained about his Specs2 Software Specification for Scala. specs2 is a library for writing executable software specifications. With specs2 you can write software specifications for one class (unit specifications) or a full system (acceptance specifications)</p>

<p>Let say some example</p>

<p>Unit</p>

<pre class="prettyprint">
import org.specs2.mutable._
class HelloWorldSpec extends Specification {
    "The 'Hello world' string" should {
        "contain 11 characters" in {
        "Hello world" must have size(11)
        }
        "start with 'Hello'" in {
        "Hello world" must startWith("Hello")
        }
        "end with 'world'" in {
        "Hello world" must endWith("world")
        }
    }
}
</pre>	

acceptance

<pre class="prettyprint">
import org.specs2._
class HelloWorldSpec extends Specification { def is = s2"""
    This is a specification to check the 'Hello world' string
 
    The 'Hello world' string should
       contain 11 characters                $e1
       start with 'Hello'                   $e2
       end with 'world'                     $e3
                                            """
    def e1 = "Hello world" must have size(11)
    def e2 = "Hello world" must startWith("Hello")
    def e3 = "Hello world" must endWith("world")
}
</pre>	