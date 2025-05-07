/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useState } from 'react';

/**
 * TextInput 컴포넌트
 *
  type?: 'default' | 'textAreaOnly';         // UI 패턴
  value: string;                             // 입력값 (controlled)
  placeholderText?: string;                  // 플레이스홀더
  onChange: (value: string) => void;         // 변경 핸들러
  disabled?: boolean;                        // 입력 비활성화 여부 (외부 제어)
  error?: boolean;                           // 오류 상태 여부 (외부 validation 결과)
};
 */
export default function TextInput({
  type = 'default',
  disabled = false,
  error = false,
  value,
  placeholderText = 'placeholder',
  onChange,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const visualState = disabled
    ? 'disabled'
    : error
      ? 'error'
      : isFocused
        ? 'active'
        : 'enabled';

  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <Wrapper type={type} visualState={visualState}>
      <StyledInput
        value={value}
        readOnly={!onChange}
        onChange={handleChange}
        placeholder={placeholderText}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ type, visualState, theme }) => {
    if (type === 'textAreaOnly') return css``;

    const backgroundColorMap = {
      enabled: theme?.colors.neutralSurfacePoint,
      disabled: theme?.colors.neutralSurfaceWeak,
      active: theme?.colors.neutralSurfaceDefault,
      error: theme?.colors.neutralSurfaceDefault,
    };

    const borderColorMap = {
      active: theme?.colors.neutralBorderDefault,
      error: theme?.colors.dangerBorderDefault,
    };

    return css`
      width: 100%;
      background-color: ${backgroundColorMap[visualState]};
      box-shadow: ${['active', 'error'].includes(visualState)
        ? `0 0 0 1px ${borderColorMap[visualState]}`
        : 'none'};
      padding: 8px 16px;
      border-radius: 8px;
      box-sizing: border-box;
    `;
  }}
`;

const StyledInput = styled.input`
  width: 100%;
  min-width: 288px;
  padding: 4px 0;

  ${({ theme }) => css`
    ${theme?.typography.semibold12};
    color: ${theme?.colors.neutralTextDefault};

    &::placeholder {
      color: ${theme?.colors.neutralTextWeak};
    }

    &:focus {
      outline: none;
    }
  `}
`;
