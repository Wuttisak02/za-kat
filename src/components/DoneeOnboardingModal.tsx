// ที่ส่วนบนของโค้ด
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useFormik } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import styles from "./DoneeOnboardingModal.module.css";

import Step8 from "./Step8";
import Step9 from "./Step9";
import DoneeOnboardingStep5_1 from "./DoneeOnboardingStep5_1";
import DoneeOnboardingStep5_2 from "./DoneeOnboardingStep5_2";
import DoneeOnboardingStep5_3 from "./DoneeOnboardingStep5_3";
import DoneeOnboardingStep5_4 from "./DoneeOnboardingStep5_4";
import DoneeOnboardingStep5_5 from "./DoneeOnboardingStep5_5";
import DoneeOnboardingStep6 from "./DoneeOnboardingStep6";
import DoneeOnboardingStep7 from "./DoneeOnboardingStep7";

interface DoneeOnboardingModalProps {
  isOpen: boolean;
  closeModal: any;
  onSubmit: any;
}

export default function DoneeOnboardingModal(props: DoneeOnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState("1.1");
  const form1_1Ref = useRef<HTMLFormElement>(null);
  const form2_1Ref = useRef<HTMLFormElement>(null);
  const form2_2Ref = useRef<HTMLFormElement>(null);
  const form3_1Ref = useRef<HTMLFormElement>(null);
  const form4_1Ref = useRef<HTMLFormElement>(null);
  const form5_1Ref = useRef<HTMLFormElement>(null);
  const form5_2Ref = useRef<HTMLFormElement>(null);
  const form5_3Ref = useRef<HTMLFormElement>(null);
  const form5_4Ref = useRef<HTMLFormElement>(null);
  const form5_5Ref = useRef<HTMLFormElement>(null);
  const form6_1Ref = useRef<HTMLFormElement>(null);
  const form7_1Ref = useRef<HTMLFormElement>(null);

  const form1_1 = useFormik({
    initialValues: {
      recipientType: "",
    },

    validationSchema: Yup.object({
      recipientType: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      // Save data to redux
      console.log(JSON.stringify(values, null, 2));

      //move to next step
      setCurrentStep("2.1");
    },
  });

  const form2_1 = useFormik({
    initialValues: {},

    validationSchema: Yup.object({}),

    onSubmit: (values) => {
      // Save data to redux
      console.log(JSON.stringify(values, null, 2));

      //move to next step
      setCurrentStep("2.2");
    },
  });

  const form2_2 = useFormik({
    initialValues: {},

    validationSchema: Yup.object({}),

    onSubmit: (values) => {
      // Save data to redux
      console.log(JSON.stringify(values, null, 2));

      //move to next step
      setCurrentStep("3.1");
    },
  });

  const form3_1 = useFormik({
    initialValues: {},

    validationSchema: Yup.object({}),

    onSubmit: (values) => {
      // Save data to redux
      console.log(JSON.stringify(values, null, 2));

      //move to next step
      setCurrentStep("4.1");
    },
  });

  const form4_1 = useFormik({
    initialValues: {},

    validationSchema: Yup.object({}),

    onSubmit: (values) => {
      // Save data to redux
      console.log(JSON.stringify(values, null, 2));

      //move to next step
      setCurrentStep("5.1");
    },
  });

  const form5_1 = useFormik({
    initialValues: {},

    validationSchema: Yup.object({}),

    onSubmit: (values) => {
      // Save data to redux
      console.log(JSON.stringify(values, null, 2));

      //move to next step
      setCurrentStep("5.2");
    },
  });

  const form5_2 = useFormik({
    initialValues: {},

    validationSchema: Yup.object({}),

    onSubmit: (values) => {
      // Save data to redux
      console.log(JSON.stringify(values, null, 2));

      //move to next step
      setCurrentStep("5.3");
    },
  });

  const form5_3 = useFormik({
    initialValues: {},

    validationSchema: Yup.object({}),

    onSubmit: (values) => {
      // Save data to redux
      console.log(JSON.stringify(values, null, 2));

      //move to next step
      setCurrentStep("5.4");
    },
  });

  const form5_4 = useFormik({
    initialValues: {},

    validationSchema: Yup.object({}),

    onSubmit: (values) => {
      // Save data to redux
      console.log(JSON.stringify(values, null, 2));

      //move to next step
      setCurrentStep("5.5");
    },
  });

  const form5_5 = useFormik({
    initialValues: {},

    validationSchema: Yup.object({}),

    onSubmit: (values) => {
      // Save data to redux
      console.log(JSON.stringify(values, null, 2));

      //move to next step
      setCurrentStep("6.1");
    },
  });

  const form6_1 = useFormik({
    initialValues: {},

    validationSchema: Yup.object({}),

    onSubmit: (values) => {
      // Save data to redux
      console.log(JSON.stringify(values, null, 2));

      //move to next step
      setCurrentStep("7.1");
    },
  });

  const form7_1 = useFormik({
    initialValues: {},

    validationSchema: Yup.object({}),

    onSubmit: (values) => {
      // Save data to redux
      console.log(JSON.stringify(values, null, 2));

      //move to next step
      setCurrentStep("8.1");
    },
  });

  const handleNextClick = () => {
    if (currentStep === "1.1") {
      form1_1.handleSubmit();
    } else if (currentStep === "2.1") {
      form2_1.handleSubmit();
    } else if (currentStep === "2.2") {
      form2_2.handleSubmit();
    } else if (currentStep === "3.1") {
      form3_1.handleSubmit();
    } else if (currentStep === "4.1") {
      form4_1.handleSubmit();
    } else if (currentStep === "5.1") {
      form5_1.handleSubmit();
    } else if (currentStep === "5.2") {
      form5_2.handleSubmit();
    } else if (currentStep === "5.3") {
      form5_3.handleSubmit();
    } else if (currentStep === "5.4") {
      form5_4.handleSubmit();
    } else if (currentStep === "5.5") {
      form5_5.handleSubmit();
    } else if (currentStep === "6.1") {
      form6_1.handleSubmit();
    } else if (currentStep === "7.1") {
      form7_1.handleSubmit();
    }
  };

  const handleBackClick = () => {
    if (currentStep !== "1.1") {
      const currentStepNumber = parseFloat(currentStep);
      const previousStep = (currentStepNumber - 1).toFixed(1);
      setCurrentStep(previousStep);
    }
  };

  const handleCloseModal = () => {
    // reset all forms
    form1_1.resetForm();

    // reset state
    setCurrentStep("1.1");

    // close modal dialog
    props.closeModal();
  };

  return (
    <>
      <Modal
        open={props.isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className={styles.modalContainer}>
          <div className={styles.modalBar}></div>
          <h2 id="modal-title" style={{ textAlign: "center" }}>
            Create New Donee
          </h2>
          <div className={styles.formContainer}>
            <div className={styles.formLeft}>
              {[...Array(9)].map((_, i) =>
                i + 1 < parseInt(currentStep) ? (
                  <>
                    <div className={styles.checkedCircle}>&#10003;</div>
                    <div className={styles.line}></div>
                  </>
                ) : (
                  <>
                    <div className={styles.pendingCircle}>{i + 1}</div>
                    {i < 8 && <div className={styles.line}></div>}
                  </>
                )
              )}
            </div>

            <div className={styles.formRight}>
              <div className={styles.formBody}>
                {currentStep === "1.1" && (
                  <>
                    <form ref={form1_1Ref} onSubmit={form1_1.handleSubmit}>
                      <p id="modal-description" style={{ textAlign: "center" }}>
                        Recipient Type
                      </p>
                      <Select
                        sx={{ width: "100%" }}
                        id="recipientType"
                        name="recipientType"
                        onChange={form1_1.handleChange}
                        value={form1_1.values.recipientType}
                      >
                        <MenuItem value={"individual"}>Individual</MenuItem>
                        <MenuItem value={"juristic"}>Juristic</MenuItem>
                      </Select>
                      {form1_1.touched.recipientType &&
                        form1_1.errors.recipientType && (
                          <div className={styles.error}>
                            {form1_1.errors.recipientType}
                          </div>
                        )}
                    </form>
                  </>
                )}

                {currentStep === "2.1" && (
                  <>
                    <form ref={form2_1Ref} onSubmit={form2_1.handleSubmit}>
                      <p id="modal-description" style={{ textAlign: "center" }}>
                        Personal Information
                      </p>
                      <FormControl fullWidth>
                        <InputLabel id="prefix-label">
                          Select an option
                        </InputLabel>
                        <Select labelId="prefix-label" id="prefix">
                          <MenuItem value={"Mr."}>Mr.</MenuItem>
                          <MenuItem value={"Mrs."}>Mrs.</MenuItem>
                          <MenuItem value={"Miss"}>Miss</MenuItem>
                        </Select>
                      </FormControl>
                    </form>
                  </>
                )}

                {currentStep === "2.2" && (
                  <>
                    <form ref={form2_2Ref} onSubmit={form2_2.handleSubmit}>
                      <p id="modal-description" style={{ textAlign: "center" }}>
                        Personal Information 2
                      </p>
                      <FormControl fullWidth>
                        <InputLabel id="prefix-label">
                          Select an option
                        </InputLabel>
                        <Select labelId="prefix-label" id="prefix">
                          <MenuItem value={"Mr."}>Mr.</MenuItem>
                          <MenuItem value={"Mrs."}>Mrs.</MenuItem>
                          <MenuItem value={"Miss"}>Miss</MenuItem>
                        </Select>
                      </FormControl>
                    </form>
                  </>
                )}

                {currentStep === "3.1" && (
                  <>
                    <form ref={form3_1Ref} onSubmit={form3_1.handleSubmit}>
                      <p id="modal-description" style={{ textAlign: "center" }}>
                        Step 3
                      </p>
                      <FormControl fullWidth></FormControl>
                    </form>
                  </>
                )}

                {currentStep === "4.1" && (
                  <>
                    <form ref={form4_1Ref} onSubmit={form4_1.handleSubmit}>
                      <p id="modal-description" style={{ textAlign: "center" }}>
                        Step 4
                      </p>
                      <FormControl fullWidth></FormControl>
                    </form>
                  </>
                )}

                <>
                  {currentStep === "5.1" && (
                    <>
                      <form ref={form5_1Ref} onSubmit={form5_1.handleSubmit}>
                        <p
                          id="modal-description"
                          style={{ textAlign: "center" }}
                        >
                          Career & Financial
                        </p>
                        <FormControl fullWidth>
                          <DoneeOnboardingStep5_1 />
                        </FormControl>
                      </form>
                    </>
                  )}
                </>

                <>
                  {currentStep === "5.2" && (
                    <>
                      <form ref={form5_2Ref} onSubmit={form5_2.handleSubmit}>
                        <p
                          id="modal-description"
                          style={{ textAlign: "center" }}
                        >
                          Career & Financial 2
                        </p>
                        <FormControl fullWidth>
                          <DoneeOnboardingStep5_2 />
                        </FormControl>
                      </form>
                    </>
                  )}
                </>

                <>
                  {currentStep === "5.3" && (
                    <>
                      <form ref={form5_3Ref} onSubmit={form5_3.handleSubmit}>
                        <p
                          id="modal-description"
                          style={{ textAlign: "center" }}
                        >
                          Career & Financial 3
                        </p>
                        <FormControl fullWidth>
                          <DoneeOnboardingStep5_3 />
                        </FormControl>
                      </form>
                    </>
                  )}
                </>

                <>
                  {currentStep === "5.4" && (
                    <>
                      <form ref={form5_4Ref} onSubmit={form5_4.handleSubmit}>
                        <p
                          id="modal-description"
                          style={{ textAlign: "center" }}
                        >
                          Career & Financial 4
                        </p>
                        <FormControl fullWidth>
                          <DoneeOnboardingStep5_4 />
                        </FormControl>
                      </form>
                    </>
                  )}
                </>

                <>
                  {currentStep === "5.5" && (
                    <>
                      <form ref={form5_5Ref} onSubmit={form5_5.handleSubmit}>
                        <p
                          id="modal-description"
                          style={{ textAlign: "center" }}
                        >
                          Career & Financial 5
                        </p>
                        <FormControl fullWidth>
                          <DoneeOnboardingStep5_5 />
                        </FormControl>
                      </form>
                    </>
                  )}
                </>

                {currentStep === "6.1" && (
                  <>
                    <form ref={form6_1Ref} onSubmit={form6_1.handleSubmit}>
                      <p id="modal-description" style={{ textAlign: "center" }}>
                        Contact Person
                      </p>
                      <FormControl fullWidth>
                        <DoneeOnboardingStep6 />
                      </FormControl>
                    </form>
                  </>
                )}

                {currentStep === "7.1" && (
                  <>
                    <form ref={form7_1Ref} onSubmit={form7_1.handleSubmit}>
                      <p id="modal-description" style={{ textAlign: "center" }}>
                        Career & Financial
                      </p>
                      <FormControl fullWidth>
                        <DoneeOnboardingStep7 />
                      </FormControl>
                    </form>
                  </>
                )}

                {currentStep === "8.1" && (
                  <>
                    <p id="modal-description" style={{ textAlign: "center" }}>
                      Documents
                    </p>
                    <FormControl fullWidth>
                      <Step8 />
                    </FormControl>
                  </>
                )}

                {currentStep === "9.1" && (
                  <>
                    <p id="modal-description" style={{ textAlign: "center" }}>
                      Detail & Description
                    </p>
                    <FormControl fullWidth>
                      <Step9 />
                    </FormControl>
                  </>
                )}
              </div>
              <div className={styles.formFooter}>
                <div>
                  <Button variant="outlined" onClick={handleCloseModal}>
                    Cancel
                  </Button>
                </div>
                <div style={{ textAlign: "right" }}>
                  <Button variant="outlined" onClick={handleBackClick}>
                    Back
                  </Button>
                  <Button variant="outlined" onClick={handleNextClick}>
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
