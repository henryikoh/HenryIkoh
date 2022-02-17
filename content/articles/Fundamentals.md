---
title: Fundamentals of good API design — Paystack API Casestudy
description: For some reason that software, you spent all this money building just never got users and slowly was abandoned. If you haven't experienced this you should probably keep reading cuz this article might save you a lot of money, time and stress.
cover: /computer1.jpeg
alt:
tag: featured
createdAt: April 29 2020
---


As a designer, I've always been intrigued by the idea of designing an API, The idea of creating a code endpoint that anyone else with access can communicate with and get things done is amazing. For a long time, I couldn't really understand how API worked and I always asked my developer friends to explain it to me. As time passed I've learned front-end development and javascript and have come back to the idea of…

> How might we design better API

## **what an API is first?**

According to Wikipedia

> An Application Programming Interface is a computing interface to a software component or a system, that defines how other components or systems can use it.

In my words, An API is a documented way that external users can understand how to interact with your code to get a specific job done. It's a contract that states clearly what job it's going to do, what is needed to get the job done, and not how it gets done.

There are various types/flavors of APIs

- [SOAP](https://rapidapi.com/blog/soap-vs-rest-api/)
- XML-RPC
- [JSON](https://rapidapi.com/blog/api-glossary/json/)-RPC
- REST

but for the sake of the article, I would be focusing on the REST API

What is a REST API?

According to [an article](https://dev.to/decipherzonesoft/types-of-apis-what-are-apis-different-types-of-apis-3mjm), I read

> REST (Representational State Transfer) is a more data-driven architectural style that we use in building REST APIs. REST APIs are based on URIs (Uniform Resource Identifier) HTTP protocol, and the use of JSON for a data format, which is super browser-compatible. REST APIs can be simple to build and scale as compared to other types of APIs.

REST is not a necessary protocol like the other web services, instead, it is a set of architectural principles. The REST service needs to have certain characteristics, including simple interfaces that allow identification and manipulation of resources using the interface.

The lack of strict rules comes from the fact that no two APIs are similar and different developers and businesses have different needs and preferences on how best to design an API. This also leads to the problem of ALOT poorly designed APIs

I am going to walk you through what I feel are the best practices for great API design using one of my favorite companies API. [Them Paystack](https://medium.com/u/ae7658885e6c?source=post_page-----69d5957f4467----------------------).

## **The Fundamentals of a good API design — Paystack Casestudy**

## **Naming your APIs**

This is possibly the most abused stage of API design. Naming an API is like naming a child, you have to give a name that represents the function of the API. **A good API name explains what the API does.**


![https://miro.medium.com/max/4364/1*siWKuHkZHMqtBf5HwHqqAQ.png](https://miro.medium.com/max/4364/1*siWKuHkZHMqtBf5HwHqqAQ.png)

As you can see from the example above the name of an API is usually broken down into a domain, a controller or model, and a function or resource ( this entire link is also called an **ENDPOINT**). The naming should make it clear what the API does. In this example, it's clear this endpoint is used to “Initialize” a transaction.

## **Grouping**

The transaction controller can have more that one function in it to perform different tasks related to Transactions and it does.

- Initialize transactions — [https://api.paystack.co/transaction/initialize/](https://api.paystack.co/transaction/initialize/)
- Verify Transaction — [https://api.paystack.co/transaction/verify/reference](https://api.paystack.co/transaction/verify/reference)
- Fetch Transaction — [https://api.paystack.co/transaction/id](https://api.paystack.co/transaction/id)

You can see how all these functions are grouped under the **transaction** controller. Making it easy to read, clear, and straight to the point.

## **Request Parameters**

A simple rule for request parameters is you don't ask for any parameter except you absolutely **NEED** it. When developing an API is important to think about abstracting the business logic and making the request the client has to send as simple as possible.

Using the Paystack initialize endpoint as an example, You are sending data and “creating” a transaction, so it uses the “POST” HTTP action

```
curl https://api.paystack.co/transaction/initialize \
-H "Authorization: Bearer SECRET_KEY" \
-H "Content-Type: application/json" \
-d '{"reference": "7PVGX8MEk85tgeEpVDtD", "amount": 500000, "email": "customer@email.com"}' \
-X POST
```

All you need to initialize this endpoint is a header for Authorization and

**amount\* — how much to charge in Kobo**

**email\* — Email of the customer.**

Everything else is optional including the reference. You can see how this API only requires 2 values in the body. So look at your API and ask yourself, what can I take out from the request body and still be able to perform the task.

**balance Optimization and Simplicity**

You can ask for more information if it reduces the number of calls you need to make to other services on the backend and improves performance dramatically. Take this with a grain of salt and keep the request parameters and minimal as possible.

## **API Response**

So a client has successfully hit your endpoint, what do you send back to them? You see its commonplace for API to cram ALOT of data into the response and overwell the client with things that are not important. This is not a good API design, your response should be a short as possible and should use the [HTTP status code guidelines.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## **COMMON HTTP CODES**

[200 OK](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200) The request has succeeded. The meaning of the success depends on the HTTP method:

[201 Created](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201) The request has succeeded and a new resource has been created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.

[400 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400) The server could not understand the request due to invalid syntax.

[401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.

[403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403) The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.

[404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404) The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.

[500 Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) The server has encountered a situation it doesn't know how to handle.

[501 Not Implemented](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501) The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are `GET` and `HEAD`.

[502 Bad Gateway](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502) This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.

[504 Gateway Timeout](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504) This error response is given when the server is acting as a gateway and cannot get a response in time.

Id recommends you read up on this as they are a lot of them but you don't have to use all. I listed the commonly used response codes above.

```
{ “status”: true, “message”: “Authorization URL created”, 
“data”: { “authorization_url”:“https://checkout.paystack.com/0peioxfhpn", 
“access_code”: “0peioxfhpn”, 
“reference”: “7PVGX8MEk85tgeEpVDtD” } 
}
```

This is the simple short and clear response from the Paystack Initialize transactions API on success with a 200 success HTTP code.

## **Errors**

It's important to test all requests to your API and flag errors as quickly as possible. Don't execute any tasks without validating the data first

## **HTTP guidelines**

It's important to stick as close as possible to the HTTP guidelines, use the appropriate methods when calling your API, don't use a POST when you are just looking up and returning data, use a GET instead

[GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET)

The `GET` method requests a representation of the specified resource. Requests using `GET` should only retrieve data.

[POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)

The `POST` method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.

[PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT)

The `PUT` method replaces all current representations of the target resource with the request payload.

[DELETE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE)

The `DELETE` method deletes the specified resource.

## **Side Effects**

Your API should have very minimal side effects if any. What is a side effect? Well, a side effect happens if when calling one API results in two or more actions being done. For example, the Paystack API for transaction initialization doesn't charge the client, there is a charge controller that does that. If it charges on transaction initialization that would be a side effect and that is poor API design.

If you notice your API does more than one core task just separate it into 2 different APIs.

A way to walk around an API having side effects is proper naming. if you want to create a transaction and charge at the same time Paystack has a Charge controller that does that.

[https://api.paystack.co/charge](https://api.paystack.co/charge)

## **Data size and consistency**

When sending back data to the client there are a couple of factors to consider, The size and the frequency of calls. A good API should not send the client a large portion of data at once. If a user is fetching a list from the database and there are 100,000 entries it makes very little sense to send it all in one request. For one it makes the client slower and also data limits and speeds may not allow such large responses. So the best thing to do would be either to paginate or fragment the data and Paystack does an excellent job at this as well.

```
curl "https://api.paystack.co/transaction" \
-H "Authorization: Bearer SECRET_KEY" 
-X GET
```

The get transaction endpoint fetches an array or all transactions but it does so in batches of 50 per page. This breaks down the data into manageable chunks that the client can handle. To make the design even better, the endpoint has the option for query parameters that allows you manually set the how many results you want per page and also what page you want, again making it easy for the client to manage and handle what would have been a lot of data.

wow, that was a lot of words. But I hope the article was helpful to all the amazing developers and creatives out in the world. Id like to give a shoutout to Paystack for having an exceptional API.

I am available to help teams and startups design better APIs and system architecture and if you think I'm cool and would like to reach out do so henry@thinksenpai.com
