import PropTypes from 'prop-types';
import * as IoIcon from 'react-icons/io5';

function ContactUs({ contactItems }) {
    const singleField = `flex w-full`;
    const inputField = `border border-[#e8e8e8] focus-visible:outline-0 placeholder:text-[#7b7975] py-[10px] px-[20px] w-full h-[50px]`;
    const textareaField = `border border-[#e8e8e8] focus-visible:outline-0 placeholder:text-[#7b7975] p-[15px] w-full h-[150px]`;
    const secondaryButton =
        'flex bg-primary hover:bg-secondary text-white leading-[38px] text-[15px] h-[40px] px-[32px]';
    return (
        <div className='contact border-b border-[#ededed] pb-[40px]'>
                <div className="flex container">
                                <form className='w-2/3'>
                                    <div className="group-field flex mb-[20px]">
                                        <div
                                            className={`${singleField} mr-[20px]`}
                                        >
                                            <input
                                                className={`${inputField}`}
                                                type="text"
                                                placeholder="Name *"
                                                required
                                            />
                                        </div>
                                        <div className={`${singleField}`}>
                                            <input
                                                className={`${inputField}`}
                                                type="email"
                                                placeholder="Email *"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className={`${singleField}  mb-[20px]`}
                                    >
                                        <input
                                            className={`${inputField}`}
                                            type="text"
                                            placeholder="Subject *"
                                            required
                                        />
                                    </div>
                                    <div className={`${singleField} mb-[30px]`}>
                                        <textarea
                                            className={`${textareaField}`}
                                            type="text"
                                            placeholder="Please describe what you need."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className={`${secondaryButton}`}
                                    >
                                        Submit
                                    </button>
                                </form>
                
                                <div className="w-1/3 px-12 flex flex-col gap-8">
                        {contactItems[0]?.singleContactInfo?.map((items) => {
                            const InfoIcon = IoIcon[items.infoIcon];
                            return (
                                <div
                                    className=""
                                    key={items.id}
                                >
                                    <div className="single-contact-info">
                                        <div className="flex ">
                                            <span className="icon text-[36px]">
                                                <InfoIcon />
                                            </span>
                                            <div className="content flex flex-col ml-[26px]">
                                                <h2 className="text-[18px] text-primary">
                                                    {items.title}
                                                </h2>
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: items.desc,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                
                
                </div>
        </div>
    );
}

ContactUs.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactUs;
