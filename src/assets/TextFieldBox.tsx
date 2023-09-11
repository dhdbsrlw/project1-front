import React from "react";
import { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const baseWrapper = css`
  display: flex;
  width: 592px;
  height: 48px;
  padding: 10px 18px;
  gap: 8px;
  border-radius: 10px;
`;

const defaultWrapper = css`
  align-items: center;
  background: none;
  border: 1px solid #b9b9b9;
`;

const hoverWrapper = css`
  align-items: center;
  border: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 0px 12px 0px rgba(216, 88, 136, 0.1);
`;

const focusedWrapper = css`
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d85888;
  background: rgba(216, 88, 136, 0.05);
`;

const typingWrapper = css`
  align-items: center;
  border: 1px solid #d85888;
  background: rgba(216, 88, 136, 0.05);
`;

const filledWrapper = css`
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d85888;
  background: none;
`;

const errorWrapper = css`
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ea0909;
  background: none;
`;

const loadingWrapper = css`
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d85888;
  background: none;
`;

const passwordWrapper = css`
  align-items: center;
  border: 1px solid #d85888;
  background: rgba(216, 88, 136, 0.05);
`;

const PlaceHolder = styled.text`
  color: #b9b9b9;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 18px;
  opacity: 0.8;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 550.628px;
  height: 100%;
`;

const HelpMessage = styled.text`
  width: 550.62px;
  height: 12px;
  color: #d85888;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
`;

const Input = styled.input`
  color: #141414;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  opacity: 0.8;
  border: none;
  outline: none;
  background: none;
  caret-color: #d85888;
`;

const CorrectText = styled.input`
  width: 546px;
  height: 18px;
  font-size: 18px;
  flex-shrink: 0;
  color: #d85888;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  background: #fff;
  ${(props) => props.type === "password" && "color: black;"}
`;

const ErrorText = styled.input`
  width: 546px;
  height: 18px;
  font-size: 18px;
  flex-shrink: 0;
  color: #141414;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  opacity: 0.8;
  background: #fff;
`;

const ErrorMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 592px;
  height: 12px;
  padding-top: 5px;
  padding-left: 18px;
  gap: 4px;
  border: none;
  background: none;
`;

const ErrorMessage = styled.text`
  width: 550.62px;
  color: #ea0909;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  opacity: 0.8;
`;

export type StateOptions =
  | "default"
  | "hover"
  | "focused"
  | "typing"
  | "filled"
  | "error"
  | "loading"
  | "password";

const stateMapping = {
  default: defaultWrapper,
  hover: hoverWrapper,
  focused: focusedWrapper,
  typing: typingWrapper,
  filled: filledWrapper,
  error: errorWrapper,
  loading: loadingWrapper,
  password: passwordWrapper,
};

export interface TextFieldBoxProps
  extends React.ComponentPropsWithoutRef<"input"> {
  state?: StateOptions;
  setState: (state: StateOptions) => void;
  setValue: (value: string) => void;
  errorMessage?: string;
  helpMessage?: string;
}

const TextFieldWrapper = styled.div<TextFieldBoxProps>`
  ${baseWrapper}
  ${(props) => stateMapping[props.state || "default"]}
`;

function TextFieldBox(props: TextFieldBoxProps) {
  const {
    state = "default",
    setState,
    setValue,
    errorMessage = "Invalid Message",
    helpMessage = "",
    ...rest
  } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseEnter = () => {
    if (state === "default") {
      setState("hover");
    }
  };

  const onMouseLeave = () => {
    if (state === "hover") {
      if (rest.value === "") setState("default");
      else setState("filled");
    }
  };

  const onFocus = () => {
    setState("focused");
  };

  const onBlur = () => {
    if (state === "focused") {
      if (rest.value === "") setState("default");
      else setState("filled");
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        ref.current !== null &&
        !ref.current.contains(e.target as Node) &&
        state === "focused"
      ) {
        if (rest.value === "") setState("default");
        else setState("filled");
      }
    };

    window.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, [rest.value, state, setState]);

  return (
    <>
      <TextFieldWrapper
        state={state}
        setState={setState}
        setValue={setValue}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
        tabIndex={rest.tabIndex || 0}
      >
        {state === "default" || state === "hover" ? (
          <PlaceHolder>{rest.placeholder}</PlaceHolder>
        ) : state === "focused" ? (
          <>
            <MessageBox>
              <HelpMessage>{helpMessage}</HelpMessage>
              <Input
                value={rest.value}
                onChange={rest.onChange}
                type={rest.type}
                autoFocus
              />
            </MessageBox>
            <img
              src="../../design_image/text_field/x_circle.png"
              width="28px"
              height="28px"
              onClick={() => {
                setValue("");
              }}
            />
          </>
        ) : state === "typing" ? (
          <>
            <MessageBox>
              <HelpMessage>{helpMessage}</HelpMessage>
              <Input {...rest} />
            </MessageBox>
            <img
              src="../../design_image/text_field/x_circle.png"
              width="28px"
              height="28px"
            />
          </>
        ) : state === "filled" ? (
          <>
            <CorrectText
              type={rest.type}
              value={rest.value}
              disabled
            ></CorrectText>
            <img
              src="../../design_image/text_field/check_circle.png"
              width="28px"
              height="28px"
            />
          </>
        ) : state === "error" ? (
          <>
            <ErrorText type={rest.type} value={rest.value} disabled></ErrorText>
            <img
              src="../../design_image/text_field/alert_circle.png"
              width="28px"
              height="28px"
            />
          </>
        ) : state === "loading" ? (
          <>
            <CorrectText>{rest.value}</CorrectText>
            <img
              src="../../design_image/text_field/loading.png"
              width="28px"
              height="28px"
            />
          </>
        ) : (
          <></>
        )}
      </TextFieldWrapper>
      {state === "error" ? (
        <ErrorMessageWrapper>
          <img
            src="../../design_image/text_field/x.png"
            width="12px"
            height="12px"
          />
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorMessageWrapper>
      ) : (
        <></>
      )}
    </>
  );
}

export default TextFieldBox;
