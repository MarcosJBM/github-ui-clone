import styled, { css } from "styled-components";

import { GoRepo, GoStar, GoRepoForked } from "react-icons/go";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 6px;
`;

export const TopSide = styled.div`
  > header {
    display: flex;
    align-items: center;

    > a {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 600;
      color: var(--link);
      text-decoration: none;

      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }

  > p {
    margin: 8px 0 16px;
    font-size: 12px;
    color: var(--gray);
    letter-spacing: 0.1px;
  }
`;

export const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(GoRepo)`
  ${iconCSS}
`;

export const BotSide = styled.div`
  > ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;
      margin-right: 16px;

      > span {
        margin-left: 5px;
        font-size: 12px;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;

    &.other {
      background: var(--other-language);
    }

    &.javascript {
      background: var(--javascript);
    }

    &.typescript {
      background: var(--typescript);
    }
  }
`;

export const StarIcon = styled(GoStar)`
  ${iconCSS}
`;

export const ForkIcon = styled(GoRepoForked)`
  ${iconCSS}
`;
