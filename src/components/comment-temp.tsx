import React from 'react'
import '../css/main.css'

const CommentTemp = () => {
    return (
        <div className="detail-bottom">
            <div className="comment">
                <div className="detail-form">
                    <h3 className="title">
                        Để lại bình luận
                    </h3>
                    <form action="#" id="comment-form">
                        <div className="form-input">
                            <input type="text" name="author" id="author" placeholder="Họ tên * "  />
                        </div>
                        <div className="form-input">
                            <textarea name="comment" id="message"  aria-required="true" placeholder="Viết bình luận..."></textarea>
                        </div>
                        <button className="button button-primary" type="submit">Bình luận</button>
                    </form>
                </div>
                <div className="comment-list">
                    <div className="detail-comment">
                        <div className="avatar">
                            <img src="https://cdn-icons-png.flaticon.com/128/3608/3608172.png" alt="commnet" />
                        </div>
                        <div className="infor">
                            <div className="title">
                                <div className="name">Huỳnh Minh Hải</div><span className="date">05/03/2025</span>
                            </div>
                            <span className="desc">
                                Tuyệt vời!!!
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rating">
                <div className="rating-container">
                    <h2>Chia sẻ thông tin</h2>
                    <div className="socicals">
                        <a href="#">
                            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="social" />
                        </a>
                        <a href="#">
                            <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="social" />
                        </a>
                        <a href="#">
                            <img src="https://hidosport.vn/wp-content/uploads/2023/09/zalo-icon.png" alt="social" />
                        </a>
                    </div>
                    <h2>Đánh giá</h2>
                    <div className="stars" id="ratingStars">
                        <span className="star" data-value="1">★</span>
                        <span className="star" data-value="2">★</span>
                        <span className="star" data-value="3">★</span>
                        <span className="star" data-value="4">★</span>
                        <span className="star" data-value="5">★</span>
                    </div>
                    <div className="result" id="ratingResult">
                        <div>
                            <span id="averageRating">4.9</span>/5 (Tổng: <span id="totalVotes">84</span> lượt
                            đánh
                            giá)
                        </div>
                        <div className="progress-container">
                            <div className="progress-item">
                                <div>5 sao</div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: '90%'}}></div>
                                </div>
                                <div>
                                    90%
                                </div>
                            </div>
                            <div className="progress-item">
                                <div>4 sao</div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: '5%'}}></div>
                                </div>
                                <div>
                                    5%
                                </div>
                            </div>
                            <div className="progress-item">
                                <div>3 sao</div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: '5%'}}></div>
                                </div>
                                <div>
                                    5%
                                </div>
                            </div>
                            <div className="progress-item">
                                <div>2 sao</div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: '0%'}}></div>
                                </div>
                                <div>
                                    0%
                                </div>
                            </div>
                            <div className="progress-item">
                                <div>1 sao</div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{width: '0%'}}></div>
                                </div>
                                <div>
                                    0%
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentTemp