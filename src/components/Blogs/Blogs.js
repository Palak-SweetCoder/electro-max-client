import React from 'react';

const Blogs = () => {
    return (
        <>
            <div className="container">
                <div className="m-4">
                    <h2 className="fw-semibold text-center items-header">
                        Our Blogs
                    </h2>
                    <div className="y-line mx-auto"></div>
                </div>
                <div>
                    <h3 className="fw-semibold">
                        Difference between javascript and nodejs.
                    </h3>
                    <h5 className="supplier">JavaScript:</h5>
                    <p>
                        A scripting language is Javascript. The most common
                        abbreviation is JS. Someone might say that Javascript is
                        the ECMA script that has been updated. Although it is
                        built on prototype inheritance, Javascript is a
                        high-level programming language that makes use of the
                        Awesome idea.
                    </p>
                    <h5 className="supplier">NodeJS:</h5>
                    <p>
                        NodeJS is a cross-platform, open-source Javascript
                        runtime environment that allows Javascript to be run on
                        the server side. Javascript code can run outside of the
                        browser with the help of Node.js. The majority of web
                        development uses Nodejs, which has a large number of
                        modules.
                    </p>
                </div>
                <div>
                    <h3 className="fw-semibold">
                        When should you use nodejs and when should you use
                        mongodb?
                    </h3>
                    <h5 className="supplier">When should use NodeJS:</h5>
                    <p>
                        Actually it depends on the project quality although
                        Node.js is an open-source server-side script that uses
                        Google's free and open-source V8 scripting engine as its
                        foundation. Node.js is quick, light, and effective.
                        Instead of using conventional threads or different
                        threads for each task, it operates in an asynchronous
                        mode and leverages event-driven input and output. Ryan
                        Dahl created Node.js for the first time in 2009.
                        Javascript code is run in this environment, which is
                        cross-platform and independent of browsers.
                    </p>
                    <h5 className="supplier">When should use MongoDB:</h5>
                    <p>
                        It depends on the type of project. After installing
                        MongoDB, users can also utilize Mongo shell. Users can
                        communicate and perform CRUD activities using the
                        JavaScript interface that Mongo Shell provides.
                    </p>
                </div>
                <div>
                    <h3 className="fw-semibold">
                        Differences between sql and nosql databases.
                    </h3>
                    <h5 className="supplier">SQL:</h5>
                    <p>
                        Data-based structured query language in SQL databases is
                        defined and controlled SQL. This language is very potent
                        when viewed from a distance. Being one of the most
                        flexible and widely-used alternatives, SQL is a reliable
                        solution, especially for large, sophisticated queries.
                        However, on the flip side, it could be limiting. To
                        determine the structure of your data before working with
                        it, SQL mandates that you employ preset schemas.
                    </p>
                    <h5 className="supplier">NoSQL:</h5>
                    <p>
                        Unstructured data in a NoSQL database has a dynamic
                        schema. Data can be arranged as a KeyValue store, a
                        document-oriented database, a column-oriented database,
                        or a graph-based database. This adaptability allows
                        papers to be created without a predetermined structure.
                        Every document may also have a different structure.
                    </p>
                </div>
                <div>
                    <h3 className="fw-semibold">
                        What is the purpose of jwt and how does it work?
                    </h3>
                    <p>
                        A JSON web token JWT is a JSON object used to
                        communicate information securely over the internet
                        between two parties. It can be used for information
                        exchange as well as an authentication method. Tokens are
                        primarily made up of a header, payload, and signature.
                        There are dots between these three sections. JWT
                        specifies the format of the data we are passing from one
                        side to the other and offers Serialized and Deserialized
                        formats. Data is primarily transferred via the network
                        with each request and response using the serialized
                        approach. While reading and writing data to the web
                        token uses the deserialized method.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Blogs;
