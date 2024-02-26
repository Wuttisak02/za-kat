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
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Step9 from "./Step9";

interface DoneeOnboardingModalProps {
  isOpen: boolean;
  closeModal: any;
  onSubmit: any;
}

export default function DoneeOnboardingModal(props: DoneeOnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState("1.1");
  const form1_1Ref = useRef<HTMLFormElement>(null);

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

  const handleNextClick = () => {
    if (currentStep === "1.1") {
      form1_1.handleSubmit();
    } else if (currentStep === "2.1") {
      setCurrentStep("3.1");
    } else if (currentStep === "3.1") {
      setCurrentStep("4.1");
    } else if (currentStep === "4.1") {
      setCurrentStep("5.1");
    } else if (currentStep === "5.1") {
      setCurrentStep("6.1");
    } else if (currentStep === "6.1") {
      setCurrentStep("7.1");
    } else if (currentStep === "7.1") {
      setCurrentStep("8.1");
    } else if (currentStep === "8.1") {
      setCurrentStep("9.1");
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
                  </>
                )}

                {currentStep === "3.1" && (
                  <>
                    <p id="modal-description" style={{ textAlign: "center" }}>
                      Step 3
                    </p>
                    <FormControl fullWidth></FormControl>
                  </>
                )}

                {currentStep === "4.1" && (
                  <>
                    <p id="modal-description" style={{ textAlign: "center" }}>
                      Step 4
                    </p>
                    <FormControl fullWidth></FormControl>
                  </>
                )}

                <>
                  <FormControl fullWidth>
                    {currentStep === "5.1" && (
                      <>
                        <p
                          id="modal-description"
                          style={{ textAlign: "center" }}
                        >
                          Career & Financial
                        </p>
                        <Step5 />
                      </>
                    )}
                  </FormControl>
                </>

                {currentStep === "6.1" && (
                  <>
                    <p id="modal-description" style={{ textAlign: "center" }}>
                      Contact Person
                    </p>
                    <FormControl fullWidth>
                      <Step6 />
                    </FormControl>
                  </>
                )}

                {currentStep === "7.1" && (
                  <>
                    <p id="modal-description" style={{ textAlign: "center" }}>
                      Career & Financial
                    </p>
                    <FormControl fullWidth>
                      <Step7 />
                    </FormControl>
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
                    <FormControl fullWidth></FormControl>
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
