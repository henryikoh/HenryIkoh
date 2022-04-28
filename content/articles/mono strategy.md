---
title: A year ago a created a Product strategy for Mono for a job ( here is the strategy doc )
description: This document was created using publicly available information for a job as a PM at mono, I originally submitted it to the CEO, Abdul but sharing it on my website as well.  I didn't get the job... Enjoy.
cover: /mono.png
alt: flow
tag: ['Product review']
createdAt: April 22 2022
---

This document was created using publicly available information for a job as a PM at mono, I originally submitted it to the CEO, Abdul but sharing it on my website as well.  I didn't get the job... Enjoy.

# Product Strategy/Vision Mono

## The gap

When trying to build a mobile application that aggregates personal customer financial data from their banks the founders of mono found out that there was no simple product that allowed you to get this data in an easy and reliable way. On building the product, (mobile application) the founders found out that people were more interested in the API they used to get the data than the mobile application. Hence mono was born.

( it's important to do a competitive analysis of other players in this space like okra, stitch and figure out how mono can differentiate itself )

## The Problem

Getting personal customer financial data from different banks can be really tedious, different banks have different API design and it's often difficult to get the financial data for customers from different banks in a pleasant and reliable way. Mono seeks to create a unified way to access customer personal financial records for all financial institutes in Nigeria(and other countries in Africa soon) using **one** API, MONO ( mono means one )

## The Vision

Mono promises a faster and easier way for organizations to access the personal data in their customers' financial accounts, leading to better and more personal business decisions and experiences. The vision is to create a product that allows for a more personal fintech experience for both customers and developers by building products, by making it easy to generate bank statements, verify account details, initiate payments, perform credit checks and much more...

## The Products

Mono currently has 3 signature products

**Mono Connect**

This is the core API built and created for developers in mind. With this API developers can make calls and have access to customer financial data. Developers can access all user data as well as income insight and identity data.

- Income Insight
- Identity API

<aside>
💡 I personally think leaning more into the insight API and allowing developers to go straight into the insight they need would be a great strategy to lean more into. For example, a developer might just want to know the monthly income of a user without needing to fetch all their financial data.

</aside>

**Direct Debit**

The product allows mono to charge customer bank accounts directly. It may be created for users who might already have their accounts linked to a product and just want to make a payment without having to use their ATM cards. (its also cheaper than having to use the card in most cases )

**Statement Pages**

This has to be a signature product from team mono as it allows companies to get the bank statement of their customers without having to make any API calls ( don't we all love API calls? ), but it allows the organization to send a link to the customer which they use to connect to their bank account, once the connection is authorized the back statement is emailed to the organization that requested it. (it's also available on their dashboard )

## The Users

Mono is designed and built for developers/organizations who are building more personal financial experiences for customers all over Africa.

**Personal Fin-tech Products**. The cuts across loan companies, personal finance companies, API companies, Insurance companies, Mortgage companies.. etc

## Customer Segments

1. **Already Establish Fin-tech Companies**

These are companies that want to integrate more personal data into their already established product

**Needs**

- Easy integration to already established processes/code
- Actionable/easy Data
- Great developer docs ( content that shows how easy it easy to connect with mono )

1. **New Developers**

People with product ideas and want to give mono a try

**Needs**

- Great Developer Experience and onboarding ( i feel this can greatly be improved )
- Great Documentation ( this really need to be improved, I still havent been able to “access” the mono docs )
- Easy and actionable data

<aside>
💡 There might be other user segments and the information stated above can still be expanding in many ways. Thinks like user journey, touchpoints, and overall experience would need to be taken into account

</aside>

## Product Strategy

In this section, I would list out my ideas on what I think the product should focus on based on the user needs stated above.

**Easy and actionable data**

![https://paper-attachments.dropbox.com/s_3C8E856EC15C5E12C0F9F6D5355626177CBCBB24B77DC24740FBD48BDE980A29_1609299467975_Screenshot+2020-12-30+at+04.37.40.png](https://paper-attachments.dropbox.com/s_3C8E856EC15C5E12C0F9F6D5355626177CBCBB24B77DC24740FBD48BDE980A29_1609299467975_Screenshot+2020-12-30+at+04.37.40.png)

The current mono home page states “access financial accounts across Africa with mono” This is good but I feel the focus should be “Get actionable financial data about your users” (this is a very rough draft, can be greatly improved ). The focus on easy and actionable data is a unique selling point that no other company can offer. So on the homepage, there should lay more emphasis on the types of data you can get ( show don't tell ) 

**example.** 

show that you can get the user's monthly income, or show that you can calculate a credit score. This is what the users need to see.  The current page seems too technical.

**Income Insight API for the win**

The theme of ease of use comes down to more focus on this API and creating algorithms that give users better and more insightful data. the kind of data that makes users go.. “….wow i never knew we could learn this much about our user”. The goal is to cut back on the boring long Json list of data that still needs to be processed on the developer server and focus on the beautiful and delightful insightful data. Of course, the boring data would still be available for developers to work with on their own as well.

**A more inviting developer Documentation**

I've tried to go over the docs a couple of times now but I think I haven't been able to read it get. Why? Because when I click on the docs I get this page.

![https://paper-attachments.dropbox.com/s_3C8E856EC15C5E12C0F9F6D5355626177CBCBB24B77DC24740FBD48BDE980A29_1609300472475_Screenshot+2020-12-30+at+04.54.25.png](https://paper-attachments.dropbox.com/s_3C8E856EC15C5E12C0F9F6D5355626177CBCBB24B77DC24740FBD48BDE980A29_1609300472475_Screenshot+2020-12-30+at+04.54.25.png)

There is no code being shown, just more links, but all the user whats to see is code and how easy it easy to make API calls

By contrast, the paystack Docs page goes straight into code samples with nice quick links that are more relevant to the user, “accept money”, “make payments” etc. So I think the mono developer docs discovery experience can be improved significantly. “get monthly income” “get back statements” etc…

![https://paper-attachments.dropbox.com/s_3C8E856EC15C5E12C0F9F6D5355626177CBCBB24B77DC24740FBD48BDE980A29_1609300560444_Screenshot+2020-12-30+at+04.55.55.png](https://paper-attachments.dropbox.com/s_3C8E856EC15C5E12C0F9F6D5355626177CBCBB24B77DC24740FBD48BDE980A29_1609300560444_Screenshot+2020-12-30+at+04.55.55.png)

**Listen to the users and adjust accordingly**

The last thing would be to listen to our user and adjust as quickly as possible based on their needs.

<aside>
💡 I  mentioned on Twitter that **some users might need to make payments** into accounts using a payment API. you said this isn't part of the roadmap. I can see this more clearly now. it's best we focus on easy and insightful data.

</aside>

## New customer acquisition

Gaining new customers would happen by telling the stories about how the mono API allows people to build better applications **because of the easy and actionable data we provide them.**

We would need to curate and tell our customer success stories. The format for great brand stories are simple

The user was ok before they found our product(normal state), they felt the need to be better than their current state, they went out to seek a solution, they found your product and now they are better(new better state)

**Example**

zedvance offered loans to customers but didn't have a way to know what amount of loan a customer was eligible for, They decided the need to seek a solution that help them understand how much loans they could give a customer, they found mono, mono helped them offer better services to their customers and they gain new customers and grew their company..

The example stated above is the basic example for a customer success story.

## Key data to measure

There are a lot of data points to measure but I think some key points to measure include.

- new developer accounts created
- Time spent on docs
- API calls made by each account
- What API’s a called more and why
- Community Mentions and Interactions of social media

## Final Thoughts

I could go into more depth with everything stated above but these are just my initial ideas. I think there should be a focus on easy and actionable data ( this should be a core part of the brand ). Imagine if Apple was into personal finical technology. Develops are tired of having to deal with a lot of complex data (expect they are into machine learning) This is also part of the motivation of why Mono was created, for ease of use. I think this along with actionable insight should be the focus.

Thank you.