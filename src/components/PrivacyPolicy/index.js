import PropTypes from 'prop-types';

function PrivacyPolicy({ privacypolicyItems }) {
    return (
        <div className="about border-b border-[#ededed] pb-[40px]">
                <div className="container">
                    <div className="">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {privacypolicyItems[0]?.TitleOne}
                            </h2>
                            <p>{privacypolicyItems[0]?.DescriptionOne}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {privacypolicyItems[0]?.TitleTwo}
                            </h2>
                            <p>{privacypolicyItems[0]?.DescriptionTwo}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {privacypolicyItems[0]?.TitleThree}
                            </h2>
                            <p>{privacypolicyItems[0]?.DescriptionThree}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {privacypolicyItems[0]?.TitleFour}
                            </h2>
                            <p>{privacypolicyItems[0]?.DescriptionFour}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {privacypolicyItems[0]?.TitleFive}
                            </h2>
                            <p>{privacypolicyItems[0]?.DescriptionFive}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {privacypolicyItems[0]?.TitleSix}
                            </h2>
                            <p>{privacypolicyItems[0]?.DescriptionSix}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {privacypolicyItems[0]?.TitleSeven}
                            </h2>
                            <p>{privacypolicyItems[0]?.DescriptionSeven}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {privacypolicyItems[0]?.TitleEight}
                            </h2>
                            <p>{privacypolicyItems[0]?.DescriptionEight}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {privacypolicyItems[0]?.TitleNine}
                            </h2>
                            <p>{privacypolicyItems[0]?.DescriptionNine}</p>
                    </div>
                    <div className="pt-[20px]">
                            <p>{privacypolicyItems[0]?.DescriptionTen}</p>
                    </div>
                </div>
        </div>
    );
}

PrivacyPolicy.propTypes = {
    privacypolicyItems: PropTypes.instanceOf(Object).isRequired,
};
export default PrivacyPolicy;
