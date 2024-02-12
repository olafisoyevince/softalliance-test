import { useState } from "react";
import Layout from "../../components/Layout";
import Search from "../../components/Search";
import { Breadcrumb, Button, Modal } from "antd";
import filter from "../../assets/filter.png";
import plus from "../../assets/plus.png";
import noelement from "../../assets/noelements.png";
import caution from "../../assets/caution.png";
import "./style.scss";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";

type Props = {};

const Elements = (props: Props) => {
    const [open, setOpen] = useState(false);
    const handleOk = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        setOpen(false);
    };

    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        console.log(e);
        setOpen(false);
    };

    const titles = ["Element Details", "Additional Details"];

    const { steps, currentStepIndex, step } = useMultiStepForm([
        <div>One</div>,
        <div>Two</div>,
    ]);

    return (
        <Layout>
            <div className="breadcrumb">
                <Breadcrumb
                    separator=">"
                    items={[
                        {
                            title: "Payroll Management",
                        },
                        {
                            title: "Element Setup",
                            href: "",
                        },

                        {
                            title: "Elements",
                        },
                    ]}
                />
            </div>

            <section className="elements__container">
                <h1>Elements</h1>

                <div className="create__container">
                    <div className="left__element">
                        <div className="search">
                            <Search />
                        </div>

                        <div className="filter__icon">
                            <img src={filter} alt="" />
                        </div>
                    </div>

                    <button
                        className="create__button"
                        onClick={() => setOpen(true)}
                    >
                        Create Element
                        <img src={plus} alt="" />
                    </button>
                </div>

                <div className="no__data">
                    <div>
                        <img src={noelement} alt="" />
                    </div>

                    <div className="noelements__text">
                        <div className="caution__sign">
                            <img src={caution} alt="" />
                        </div>

                        <p>There are no elements to display</p>
                    </div>
                </div>
            </section>

            <Modal
                title="Create Element"
                centered
                open={open}
                // onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={800}
                footer={null}
            >
                <form action="" className="element__form">
                    <div className="stepper">
                        <div>
                            {currentStepIndex + 1} / {steps.length}
                        </div>
                        {/* <div className="green__line"></div>

                        <div className="stepper__item">
                            <p>Element Details</p>

                            <div className="active">1</div>
                        </div>

                        <div className="grey__line"></div>

                        <div className="stepper__item">
                            <p>Additional Details</p>

                            <div className="inactive">2</div>
                        </div>

                        <div className="grey__line"></div> */}

                        {/* <div className="num__desc__container">
                            <div className="desc">Description</div>
                            <div className="num">1</div>
                        </div>
                        <div className="line"></div> */}
                    </div>

                    <div>{step}</div>

                    <div>
                        <Button>Cancel</Button>
                        <Button type="primary">Next</Button>
                    </div>
                </form>
            </Modal>
        </Layout>
    );
};

export default Elements;
