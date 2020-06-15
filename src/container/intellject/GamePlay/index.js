import React from 'react';
import game from './game';
import css from './index.less';
import Toast from '@/component/Toast';
import Button from '@/component/Button';
import classnames from 'classnames';
import Animate from '../Animate';
import Pagination from '@/component/Pagination';
import ModalComfirm from '@/component/ModalComfirm';
import Timeout from '../Timeout';
import { useImmer } from '@/hooks';

/**
 * @name: luoguoxiong
 * @msg: 推理力有游戏
 * @param {isTest} bool 是否是练习
 * @param {getScore} function 取得成绩
 * @return: ReactDOM
 */
export default function GamePlay({ isTest, getScore = () => {} }) {
  const [{ gameData, page, submitVis, isClick }, setState] = useImmer({
    gameData: isTest ? game.slice(0, 1) : game.slice(1, game.length),
    page: 1,
    isClick: false,
    submitVis: false,
  });

  // 练习点击提交
  const showToast = (bool) => {
    if (bool) {
      Toast.info(<div className={css.infoMsg}>请选择一个选项</div>, 1000);
    } else {
      const { choose, active } = gameData[page - 1];
      getScore(choose === active);
    }
  };

  // 选择图片
  const chooseItem = (index) => {
    if (!isClick) {
      setState((state) => {
        state.gameData[page - 1].choose = index;
        state.isClick = true;
        const isAllHasDo = gameData.every((item) => item.choose !== -1);
        if (!isAllHasDo) {
          const id = setTimeout(() => {
            setState((state) => {
              state.isClick = false;
              state.page = gameData.length === page ? state.page : state.page + 1;
              clearTimeout(id);
            });
          }, 20);
        }
      });
    }
  };

  // 提交成績
  const submitScore = () => {
    setState((state) => {
      state.submitVis = false;
      const score = gameData.filter((item) => item.active === item.choose).length;
      getScore(score);
    });
  };

  // 分页
  const pageChange = (val) => {
    // 下一页，判断当前页是否已选择答案
    if (val > page) {
      const isChoose = gameData[page - 1].choose === -1;
      if (isChoose) {
        Toast.info(<div className={css.infoMsg}>请选择一个选项</div>, 1000);
      } else {
        setState((state) => {
          state.page = val;
        });
      }
    } else {
      setState((state) => {
        state.page = val;
      });
    }
  };

  const { title, list, choose } = gameData[page - 1];

  const isDisabled = !(isTest && choose !== -1);

  return (
    <div className={css.intellject}>
      {!isTest ? (
        <Timeout
          onTimeout={() => {
            setState((state) => {
              state.submitVis = false;
            });
          }}
          times={2400}
          onClose={() => {
            submitScore();
          }}
        ></Timeout>
      ) : (
        <div className={css.padding60}></div>
      )}
      <Animate page={page} isTest={isTest} list={list.length}>
        <div className={css.bigPhoto}>
          <img src={`/images/intellect/${title}.png`} alt=""></img>
        </div>
        <div className={css.subLine}>请选择一个符合的选项 ({list.length}选1)</div>
        <div
          className={classnames({
            [css.chooseItemWrap]: true,
            [css.chooseScrollWrap]: list.length > 6,
          })}
        >
          {list.map((item, index) => {
            return (
              <div
                className={css.chooseItem}
                key={index}
                onClick={() => {
                  chooseItem(index);
                }}
              >
                {choose === index ? (
                  <img src="/img/choose.png" alt="" className={css.isChoose} />
                ) : (
                  <div className={css.choose}></div>
                )}
                <img
                  src={`/images/intellect/${item}.png`}
                  alt=""
                  className={css.intelljectImg}
                ></img>
              </div>
            );
          })}
        </div>
      </Animate>
      {isTest ? (
        <div className={css.textSubmit}>
          <Button
            isDisabled={isDisabled}
            onClick={() => {
              showToast(isDisabled);
            }}
          >
            提交
          </Button>
        </div>
      ) : (
        <Pagination
          page={page}
          total={gameData.length}
          onChange={(val) => {
            pageChange(val);
          }}
          value={gameData.filter((item) => item.choose !== -1).length}
          onSubmit={() => {
            setState((state) => {
              state.submitVis = true;
            });
          }}
        ></Pagination>
      )}
      <ModalComfirm
        visable={submitVis}
        title="填好了，去提交"
        btnList={[
          {
            text: '再想想',
            onClick: () => {
              setState((state) => {
                state.submitVis = false;
              });
            },
          },
          {
            text: '提交',
            textColor: '#44B979',
            onClick: () => {
              submitScore();
            },
          },
        ]}
      />
    </div>
  );
}
