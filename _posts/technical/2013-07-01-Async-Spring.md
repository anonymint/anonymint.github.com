---
layout: post
category: technical
tags: [java, spring, async]
title: Async with Spring
---
<p>
I have looked up in the Internet and spring document page in order to find a way to easily test Asynchronous Task exec in Spring and here is the idea.
</p>

<p>
I'm creating a simple job to download a huge file and return it in 2 seconds but reality is just Thread sleep. With 2 seconds delay in every file download we can see what's different between sync and async process.	
</p>

<p>
Thanks to Spring 3, to test this couldn't be more easy with annotation <code>@Async</code>.	
</p>

<p>
I started from AsyncService Interface 
</p>

<code class="prettyprint lang-java">

public interface AsyncService {
    public File normalDownloadWithReturn(String filePath);
    public Future&lt;File&gt; asyncDownloadWithReturn(String filePath);
}
</code>	

<p>
	and to implement it with Thread sleep in 2 sec and notice here I use annotation <code>asyncService</code> for spring look up and <code>Async</code> for async capability.
</p>

<!-- read more -->

<code>AsyncServiceImpl</code>
<pre class="prettyprint lang-java">
@Service("asyncService")
public class AsyncServiceImpl implements AsyncService {
 
    public File normalDownloadWithReturn(String filePath) {
        File file = null;
        try {
            Thread.sleep(2000); // pause for 2 sec
            file = new File(filePath);
        } catch (InterruptedException e) {
        }
        return file;
    }
 
    @Async
    public Future&lt;File&gt; asyncDownloadWithReturn(String filePath) {
        File file = null;
        try {
            Thread.sleep(2000); // pause for 2 sec
            file = new File(filePath);
        } catch (InterruptedException e) {
        }
        return new AsyncResult&lt;File&gt;(file);
    }
}	
</pre>

<p>
	With above code just not over 3 minutes we're ready to do some testing with Junit4 again for really simple run, test and done.
</p>

<p>
Before we start testing it let create spring config file to inject into our application.
</p>

<code>async-context.xml</code>
<pre class="prettyprint">
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:task="http://www.springframework.org/schema/task"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans-3.1.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context-3.1.xsd
        http://www.springframework.org/schema/task
        http://www.springframework.org/schema/task/spring-task-3.1.xsd"&gt;
 
 
    &lt;context:annotation-config/&gt;
    &lt;context:component-scan base-package="au.com"/&gt;
    &lt;task:annotation-driven/&gt;
&lt;/beans&gt;
</pre>

<p>
I'm creating TestCase class here	
</p>
<code>AsyncServiceImplTest</code>
<pre class="prettyprint">
 public class AsyncServiceImplTest {
    Logger logger = LoggerFactory.getLogger(AsyncServiceImplTest.class);
    private AsyncService service;
 
    @Before
    public void setUp() throws Exception {
        GenericXmlApplicationContext ctx = new GenericXmlApplicationContext();
        ctx.load("classpath:async-context.xml");
        ctx.refresh();
        service = ctx.getBean("asyncService", AsyncService.class);
    }
 
    @Test
    public void testNormalDownloadWithReturn() throws Exception {
        Long startTime = System.currentTimeMillis();
        for (int i = 0; i &lt; 5; i++) {
            File file1 = service.normalDownloadWithReturn("d:/random.log");
            File file2 = service.normalDownloadWithReturn("d:/random.log");
            File file3 = service.normalDownloadWithReturn("d:/random.log");
 
            logger.info("file's back "+file1.getName());
            logger.info("file's back "+file2.getName());
            logger.info("file's back "+file3.getName());
        }
        stopTime(startTime);
    }
    @Test
    public void testAsyncDownloadWithReturn() throws Exception {
        Long startTime = System.currentTimeMillis();
        for (int i = 0; i &lt; 5; i++) {
            Future&lt;File&gt; file1 = service.asyncDownloadWithReturn("d:/random.log");
            Future&lt;File&gt; file2 = service.asyncDownloadWithReturn("d:/random.log");
            Future&lt;File&gt; file3 = service.asyncDownloadWithReturn("d:/random.log");
 
            logger.info("file's back "+file1.get().getName());
            logger.info("file's back "+file2.get().getName());
            logger.info("file's back "+file3.get().getName());
        }
        stopTime(startTime);
    }
    private void stopTime(long startTime) {
        logger.info("Total Time in sec: " + Long.toString((System.currentTimeMillis() - startTime)/1000));
    }
}
</pre>

<p>
	From the above code, testNormalDownloadWithReturn method I make a call to spring service 5 times and with 3 files a loop. The result is as expected each loop program will download single file for 2 sec or 6 sec for each loop, sum up in total of 30 seconds.	
</p>

<p>
	<strong>
		01 Jul 2013 11:47:05  INFO AsyncServiceImplTest - Total Time in sec: 30	
	</strong>
</p>

<p>
	Now it's time for our async process, testAsyncDownloadWithReturn method I make a call to spring service 5 times with 3 files a loop as normal one we test before. The result is each loop application will use only 2 sec for 3 files because it's running in parallel and sum up it's 10 sec for 5 loops.	
</p>

<p>
	<strong>
		01 Jul 2013 11:50:48  INFO AsyncServiceImplTest - Total Time in sec: 10	
	</strong>
	
</p>

<p>
	<strong>
		In summary, I have created this simple test just to show you how easy to run async in spring just in 5 minutes and you can see a big picture of this improvement quite convincing. 		
	</strong>
	
</p>
