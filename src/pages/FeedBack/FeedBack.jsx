

const FeedBack = () => {
    return (
        <section
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-easing="linear"
            data-aos-duration="200"
            className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl lg:text-4xl font-bold my-4 lg:my-8 text-center text-orange-primary">Customer Feedback</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Feedback Card */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-10 h-10 rounded-full mr-2"
                                src="https://placekitten.com/200/200" // Replace with customer's profile image URL
                                alt="Customer Profile"
                            />
                            <div>
                                <h3 className="text-lg font-medium">John Doe</h3>
                                <p className="text-gray-500 text-sm">New York, USA</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            Very good product. My children loves it. It is very usefull. I use this website regularly.Very good product. My children loves it. It is very usefull. I use this website regularly.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-10 h-10 rounded-full mr-2"
                                src="https://placekitten.com/200/200" // Replace with customer's profile image URL
                                alt="Customer Profile"
                            />
                            <div>
                                <h3 className="text-lg font-medium">John Doe</h3>
                                <p className="text-gray-500 text-sm">New York, USA</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            Very good product. My children loves it. It is very usefull. I use this website regularly.Very good product. My children loves it. It is very usefull. I use this website regularly.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-10 h-10 rounded-full mr-2"
                                src="https://placekitten.com/200/200" // Replace with customer's profile image URL
                                alt="Customer Profile"
                            />
                            <div>
                                <h3 className="text-lg font-medium">John Doe</h3>
                                <p className="text-gray-500 text-sm">New York, USA</p>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            Very good product. My children loves it. It is very usefull. I use this website regularly.Very good product. My children loves it. It is very usefull. I use this website regularly.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeedBack;