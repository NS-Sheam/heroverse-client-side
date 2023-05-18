/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";

const Blogs = () => {
    const [foldQ1, setFoldQ1] = useState(false)
    const [foldQ2, setFoldQ2] = useState(false)
    const [foldQ3, setFoldQ3] = useState(false)
    const [foldQ4, setFoldQ4] = useState(false)
    return (
        <div className="space-y-5 py-5">
            <div className="card bg-base-100 shadow-xl w-3/4 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    {
                        foldQ1 ?
                            <p><span className="font-bold">Access Token:</span> <br />
                                An access token is a credential that is issued to a client by an authentication server. It represents the client's authorization to access specific resources or perform certain actions. Access tokens are typically short-lived and have an expiration time. They are used to authenticate the client when making requests to protected APIs or resources. <br />
                                <span className="font-bold">Refresh Token:</span> <br />
                                A refresh token is a credential that is also issued to a client by an authentication server, usually alongside an access token. Refresh tokens have a longer lifespan compared to access tokens. They are used to obtain a new access token once the current access token expires. Refresh tokens provide a way for the client to maintain continuous access without requiring the user to reauthenticate.</p> :
                            <p><span className="font-bold">Access Token:</span> <br />
                                An access token is a credential that is issued to a client by an authentication server. It represents the client's authorization...</p>

                    }
                    <div className="card-actions justify-end">
                        <button onClick={() => setFoldQ1(!foldQ1)} className="btn bg-orange-primary outline-none border-none hover:bg-orange-secondary">{foldQ1 ? "Read Less" : " Read More"}</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl w-3/4 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                    {
                        foldQ2 ?
                            <p>SQL databases and NoSQL databases have different characteristics and approaches to storing and managing data. SQL databases, also known as relational databases, use a structured data model based on tables with predefined schemas. They enforce a rigid schema, meaning that data must conform to a predefined structure, ensuring data consistency and integrity. SQL databases utilize SQL (Structured Query Language) as a standardized way to query and manipulate data using statements like SELECT, INSERT, UPDATE, and DELETE. They support complex relationships between tables through primary and foreign keys, allowing for one-to-one, one-to-many, and many-to-many relationships. SQL databases typically scale vertically by adding more resources, such as upgrading hardware or increasing memory.

                                On the other hand, NoSQL databases take a different approach. They are often referred to as non-relational or schema-less databases. NoSQL databases provide a flexible data model, allowing data to be stored without predefined structures. This flexibility makes it easier to handle evolving or unstructured data. NoSQL databases can store data in various formats such as key-value pairs, documents, columnar, or graphs. Each type of NoSQL database has its own query language or API for interacting with the data. NoSQL databases excel at horizontal scaling, enabling them to handle large amounts of data by distributing it across multiple nodes. This scalability allows for high performance and can accommodate growing workloads. However, the support for complex relationships in NoSQL databases may vary depending on the specific type. Some NoSQL databases offer features like referencing or embedding to establish relationships.</p> :
                            <p>
                                SQL databases and NoSQL databases have different characteristics and approaches to storing and managing data. SQL databases, also known as relational databases, use a structured data model based on tables with predefined schemas... </p>

                    }
                    <div className="card-actions justify-end">
                        <button onClick={() => setFoldQ2(!foldQ2)} className="btn bg-orange-primary outline-none border-none hover:bg-orange-secondary">{foldQ2 ? "Read Less" : " Read More"}</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl w-3/4 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">What is express js? What is Nest JS?</h2>
                    {
                        foldQ3 ?
                            <p><span className="font-bold">Express.js:</span> <br />
                                Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and straightforward way to build web applications and APIs. Express.js allows developers to define routes, handle HTTP requests and responses, and implement middleware functions to perform tasks like authentication, logging, and error handling. It is widely used and has a large ecosystem of middleware and plugins that enhance its functionality. With Express.js, developers have the freedom to structure their application according to their preferences and build RESTful APIs or server-side rendered applications. <br />
                                <span className="font-bold">NestJS:</span> <br />
                                NestJS is a progressive, extensible, and scalable Node.js framework for building efficient and reliable server-side applications. It is built with TypeScript and heavily influenced by Angular's architecture and design principles. NestJS combines elements of object-oriented programming, functional programming, and reactive programming to provide a robust foundation for building complex server-side applications. It offers a modular structure, dependency injection, and a powerful command-line interface (CLI) that aids in scaffolding and generating boilerplate code. NestJS promotes the use of decorators and metadata for defining routes, controllers, services, and other application components. It supports various modules, middleware, and plugins, making it highly extensible and adaptable for different application requirements. NestJS is known for its focus on developer experience, maintainability, and scalability. It has gained popularity for building enterprise-grade applications and microservices using Node.js.</p> :
                            <p><span className="font-bold">Express.js:</span> <br />
                                Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and straightforward way to build web applications and...</p>

                    }
                    <div className="card-actions justify-end">
                        <button onClick={() => setFoldQ3(!foldQ3)} className="btn bg-orange-primary outline-none border-none hover:bg-orange-secondary">{foldQ3 ? "Read Less" : " Read More"}</button>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl w-3/4 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                    {
                        foldQ4 ?
                            <p>MongoDB's aggregate is a powerful feature that allows for advanced data processing and analysis within the database. It provides a framework for performing complex operations on collections, such as grouping, filtering, transforming, and calculating aggregated results.

                                The aggregate pipeline in MongoDB consists of multiple stages, where each stage performs a specific operation on the data. These stages are applied sequentially, with the output of one stage becoming the input for the next. The aggregate pipeline allows for data transformation and aggregation in a flexible and efficient manner.</p> :
                            <p>MongoDB's aggregate is a powerful feature that allows for advanced data processing and analysis within the database....</p>

                    }
                    <div className="card-actions justify-end">
                        <button onClick={() => setFoldQ4(!foldQ4)} className="btn bg-orange-primary outline-none border-none hover:bg-orange-secondary">{foldQ4 ? "Read Less" : " Read More"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;