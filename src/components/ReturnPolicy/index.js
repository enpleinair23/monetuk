import PropTypes from 'prop-types';

function ReturnPolicy({ returnpolicyItems }) {
    return (
        <div className="about border-b border-[#ededed] pb-[40px]">
                <div className="container">
                    <div className="">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {returnpolicyItems[0]?.TitleOne}
                            </h2>
                            <p>{returnpolicyItems[0]?.DescriptionOne}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {returnpolicyItems[0]?.TitleTwo}
                            </h2>
                            <p>{returnpolicyItems[0]?.DescriptionTwo}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {returnpolicyItems[0]?.TitleThree}
                            </h2>
                            <p>{returnpolicyItems[0]?.DescriptionThree}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {returnpolicyItems[0]?.TitleFour}
                            </h2>
                            <p>{returnpolicyItems[0]?.DescriptionFour}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {returnpolicyItems[0]?.TitleFive}
                            </h2>
                            <p>{returnpolicyItems[0]?.DescriptionFive}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {returnpolicyItems[0]?.TitleSix}
                            </h2>
                            <p>{returnpolicyItems[0]?.DescriptionSix}</p>
                    </div>
                    <div className="pt-[20px]">
                            <h2 className="text-[20px] mb-[4px] text-primary">
                                {returnpolicyItems[0]?.TitleSeven}
                            </h2>
                            <p>{returnpolicyItems[0]?.DescriptionSeven}</p>
                    </div>
                    <div className="pt-[20px]">
                            <p>{returnpolicyItems[0]?.DescriptionEight}</p>
                    </div>
                </div>
        </div>
    );
}

ReturnPolicy.propTypes = {
    returnpolicyItems: PropTypes.instanceOf(Object).isRequired,
};
export default ReturnPolicy;
