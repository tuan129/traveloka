//hook
import { useEffect, useState } from 'react';

// images
import images from '~/assets/images';

// component
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import CityItems from '~/components/CityItems';

//library
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
import {
    faCalendarDay,
    faChair,
    faMagnifyingGlass,
    faPlaneArrival,
    faPlaneDeparture,
    faUserLarge,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    const [start, setStart] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setStart([]);
        }, 0);
    });

    return (
        <div className={cx('home')}>
            {/* Banner */}
            <div className={cx('wrapper')}>
                <div className={cx('banner')}>
                    <div className={cx('title-banner')}>
                        <h1>Tìm và đặt vé máy bay khuyến mãi & vé giá rẻ chỉ với 3 bước đơn giản!</h1>
                        <h2>Khám phá ngay những ưu đãi tốt nhất dành cho bạn tại Traveloka!</h2>
                    </div>
                    <img src={images.banner} alt="banner" />
                </div>

                <div className={cx('next-link')}>Xem thêm khuyến mãi</div>
            </div>

            {/* Content */}

            <div className={cx('content')}>
                <div className={cx('find-ticket')}>
                    <div className={cx('ticket')}>
                        <div className={cx('title-content')}>Một chiều/ Khứ hồi</div>
                        <div className={cx('buy-ticket')}>
                            <div className={cx('info-customer')}>
                                <div className={cx('right-info')}>
                                    {/* Departure */}
                                    <div className={cx('from')}>
                                        <p className={cx('name-input')}>Từ</p>
                                        <FontAwesomeIcon className={cx('icon')} icon={faPlaneDeparture} />

                                        <Tippy
                                            visible={start.length > 0}
                                            interactive
                                            render={(attrs) => (
                                                <div className={cx('search-start')} tabIndex="-1" {...attrs}>
                                                    <PoperWrapper>
                                                        <h3>Thành Phố Hoặc Sân Bay Phổ biến</h3>
                                                        <CityItems />
                                                        <CityItems />
                                                        <CityItems />
                                                        <CityItems />
                                                    </PoperWrapper>
                                                </div>
                                            )}
                                        >
                                            <input type="text" placeholder="Origin" />
                                        </Tippy>
                                    </div>

                                    {/* Arrival */}
                                    <div className={cx('from')}>
                                        <p className={cx('name-input')}>Đến</p>
                                        <FontAwesomeIcon className={cx('icon')} icon={faPlaneArrival} />
                                        <Tippy
                                            visible={start.length > 0}
                                            interactive
                                            render={(attrs) => (
                                                <div className={cx('search-start')} tabIndex="-1" {...attrs}>
                                                    <PoperWrapper>
                                                        <h3>Thành Phố Hoặc Sân Bay Phổ biến</h3>
                                                        <CityItems />
                                                        <CityItems />
                                                        <CityItems />
                                                        <CityItems />
                                                    </PoperWrapper>
                                                </div>
                                            )}
                                        >
                                            <input type="text" placeholder="Destination" />
                                        </Tippy>
                                    </div>
                                </div>

                                {/* Amount customer */}
                                <div className="left-info">
                                    <div className={cx('amount-cus')}>
                                        <p className={cx('name-input')}>Số hành khách</p>
                                        <FontAwesomeIcon className={cx('icon')} icon={faUserLarge} />
                                        <input type="text" placeholder="1 Người lớn, 0 Trẻ em, 0 Em bé" />
                                    </div>
                                </div>
                            </div>

                            <div className={cx('info-customer')}>
                                <div className={cx('right-info')}>
                                    {/* Departure */}
                                    <div className={cx('from')}>
                                        <p className={cx('name-input')}>Ngày đi</p>
                                        <FontAwesomeIcon className={cx('icon')} icon={faCalendarDay} />
                                        <input type="text" placeholder="Origin" />
                                    </div>

                                    {/* Arrival */}
                                    <div className={cx('from')}>
                                        <p className={cx('name-input')}>Ngày về</p>
                                        <FontAwesomeIcon className={cx('icon')} icon={faCalendarDay} />
                                        <input type="text" placeholder="Destination" />
                                    </div>
                                </div>

                                {/* Amount customer */}
                                <div className="left-info">
                                    <div className={cx('amount-cus')}>
                                        <p className={cx('name-input')}>Hạng ghế</p>
                                        <FontAwesomeIcon className={cx('icon')} icon={faChair} />
                                        <input type="text" placeholder="1 Người lớn, 0 Trẻ em, 0 Em bé" />
                                    </div>
                                </div>
                            </div>
                            <Button
                                large
                                leftIcon={<FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />}
                                className={cx('btnFind')}
                                to="/ticket-plane"
                            >
                                Tìm chuyến bay
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
