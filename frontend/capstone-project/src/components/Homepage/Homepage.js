import React, { useState } from 'react'; // 导入 useState 钩子
import './Homepage.css';

function App() {
    const [isHelpClicked, setIsHelpClicked] = useState(false);
    const [isLogoutClicked, setIsLogoutClicked] = useState(false);

    const handleHelpClick = () => {
        // 处理点击 Help 图标的逻辑
        setIsHelpClicked(true);

        // 在这里可以添加处理逻辑，比如显示帮助信息或执行其他操作
    };

    const handleLogoutClick = () => {
        // 处理点击 Logout 图标的逻辑
        setIsLogoutClicked(true);

        // 在这里可以添加处理逻辑，比如执行注销操作
    };

    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src="/flight-icon.png" alt="Flight Icon" />
                        <span className="logo-text">APB</span>
                    </div>
                    <div class="dropdown">
                        <li>
                            <button className="dropbtn">For Route</button>
                            <div className="dropdown-content">
                                <a href="#">Delay Rate</a>
                                <a href="#">Cancel Rate</a>
                                <a href="#">Busyness Level</a>
                                <a href="#">Load Factor</a>
                            </div>
                        </li>
                    </div>

                    <div className="dropdown">
                        <li>
                            <button className="dropbtn">For Airlines</button>
                            <div className="dropdown-content">
                                <a href="#">Delay Rate</a>
                                <a href="#">Cancel Rate</a>
                                <a href="#">Busyness Level</a>
                            </div>
                        </li>
                    </div>
                </ul>

                <div className="rightNav">
                    <button className="icon-button" onClick={handleHelpClick}>
                        <img src="/help-icon.png" alt="Help Icon" />
                    </button>
                    <button className="icon-button" onClick={handleLogoutClick}>
                        <img src="/logout-icon.png" alt="Logout Icon" />
                    </button>
                </div>
            </nav>

            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            Related picture about Australian aviation
                        </h1>
                        <p class="text-small">
                            some description about it
                        </p>

                    </div>
                </div>
            </section>

            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Some text description
                        </h1>
                        <p class="text-small">
                            JavaScript is the world most popular
                        </p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    )
}



export default App;
