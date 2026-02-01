import Image from "next/image";

const Imagescard = async ({ images }) => {
	return (
		<section className="bg-blue-50 p-4">
			<div className="container mx-auto">
				{images.length === 1 ? (
					<Image
						src={images[0]}
						alt=""
						width={1800}
						height={400}
						className="object-cover mx-auto rounded-xl h-[400px]"
						priority={true}
					/>
				) : (
					<div className="grid grid-cols-2 gap-4">
						{images.map((image, index) => (
							<div
								key={index}
								className={`${images.length === 3 && index === 2 ? "col-span-2" : "col-span-1"}`}
								//                                                              ^
							>
								<Image
									src={image}
									alt=""
									width={1800}
									height={400}
									className="object-cover w-full rounded-xl h-[400px]"
									priority={true}
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Imagescard;
