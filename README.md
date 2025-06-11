# KKAM_AI
### 데이터 전처리
- 동영상(3fps/sec) label 별 영상 분리 및 데이터파일 재구성
- 프레임 별 라벨 할당 (Normal, Fall, Theft, Break)
- 영상 처리 (224*224), 채널 단위 Z-score 정규화

### AI 모델 구조
- Resnet18 + Bidirectional LSTM

### 학습 전략
- Multi-label classification (4-class)
- BCE + sigmoid: 각 클래스에 대한 **독립적인 2진 분류(binary classification)** 수행
- Validation loss 기반 best model 가중치 업데이트
  
#### 하이퍼파라미터 세팅
```
    # 학습 파라미터
    parser.add_argument('--epochs', default=50, help='number of training epochs')
    parser.add_argument('--batch-size', default=4, help='batch size per GPU')
    parser.add_argument('--lr', default=1e-4, help='learning rate')

    # 데이터셋 파라미터
    parser.add_argument('--window-size', default=2, help='time window size for clip (sec)')
    parser.add_argument('--num-workers', default=4, help='number of DataLoader workers')
    parser.add_argument('--fps', default=3, help='number of frames per clip (3fps)') 

    # 모델 파라미터
    parser.add_argument('--hidden-dim', default=256, help='LSTM hidden dimension')
    parser.add_argument('--num-layers', default=1, help='number of LSTM layers')
    parser.add_argument('--num-classes', default=4, help='number of anomaly classes; default = auto from dataset')
    parser.add_argument('--bidirectional', default=True, help='use bidirectional LSTM')
    parser.add_argument('--freeze-backbone', default=False, help='freeze ResNet backbone weights')


```


# KKAM Homepage
## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## KKAM_Android


<p align="center">
  <img src="ui내용.png" width="300" alt="로그인 화면">
  <img src="ui내용2.png" width="300" alt="메인 화면">
</p>

## 개요
무인 CCTV 영상을 실시간으로 분석하여 이상 행동(정상, 전도, 절도, 파손)을 탐지하는 Android 애플리케이션입니다. 

## 주요 기능
- **로그인 화면**
  - 이메일, 비밀번호 로그인 
- **메인 페이지**
  - 실시간 영상 스트리밍  
- **이상 행동 검출**  
  - 정상  
  - 전도
  - 절도
  - 파손  
- **알림 전송**
  - 알림 발생 조건
  - 푸시 알림 또는 소리 알림 전송 
- **로컬 및 원격 설정 관리**  
  - 사용자 환경설정 항목

##  프로젝트 구조

```plaintext
.
├── android/
│   ├── app/
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── java/com/example/kkam_backend/
│   │   │   │   │   ├── ui/
│   │   │   │   │   │   └── MainActivity.kt         # 화면 진입점
│   │   │   │   │   └── util/
│   │   │   │   │       └── NotificationHelper.kt   # 알림 관리 유틸
│   │   │   │   └── res/
│   │   │   │       ├── layout/                      # XML 레이아웃
│   │   │   │       ├── drawable/
│   │   │   │       └── raw/
│   │   │   │           └── alert_sound.mp3         # 경고음 파일
│   │   │   └── assets/                              # TFLite 모델 등
│   │   └── build.gradle.kts    
│   └── settings.gradle.kts     
├── gradle/                     
├── .gitignore                  
├── build.gradle.kts            
├── gradle.properties           
├── gradlew / gradlew.bat       
└── tree.txt                    

```

## 기술 스택
- 언어, 프레임워크 : Kotlin
- 라이브러리 : Socket.IO (네트워크), Engine.IOWebSocket 트랜스포트 (이미지 로딩), Andriod Notification Channel/API(알림), MediaPlayer (사운드 재생)
