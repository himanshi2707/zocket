import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Component
import Layout from '../layout/Layout';
// css images and icons
import "./campaign.css";
import Cake from '../assets/cake.png';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsFacebook, BsGoogle, BsInstagram, BsYoutube } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';

const Campaign = () => {


    const [campaigns, setCampaigns] = useState([]);
    const [jsonData, setJsonData] = useState(null);

        useEffect(() => {
            async function fetchData() {
            try {
                const response = await fetch("http://localhost:3002/database/getCampaign");
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCampaigns(data);
                setJsonData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
            }
            fetchData();
        }, []);

/*
    const getCampaign = async () => {
        const res = await fetch("http://localhost:3002/database/getCampaign", {
            method: "GET"
        });

        console.log(res);
    };
*/
    return (
        <Layout>
            <div className="campaign--container">
                <div className="campaign--header">
                    <div className='campaign--header-title'>
                        <h4>Your Campaigns</h4>
                        <p>Check the list of campaigns you created</p>
                    </div>
                    <Link className='campaign--create-new-campaign-button' to="/createNewCampaign">
                        <AiOutlinePlusCircle />
                        Create new campaign
                    </Link>
                </div>
                <div className="campaign--main-body">
                    {/* filters */}
                    <div className="campaign--main-body-filters">
                        <div className='campaign--main-body-filters-platform'>
                            <label>Platform:</label>
                            <select>
                                <option>All Platform</option>
                                <option>Facebook</option>
                                <option>Youtube</option>
                                <option>Google</option>
                            </select>
                        </div>
                        <div className='campaign--main-body-filters-status'>
                            <label>Status:</label>
                            <select>
                                <option>All Status</option>
                                <option>Live now</option>
                                <option>Paused</option>
                                <option>Exhausted</option>
                            </select>
                        </div>
                        <div className='campaign--main-body-filters-date-range'>
                            <select>
                                <option>Last 30 days</option>
                                <option>Last 15 days</option>
                                <option>Last 7 days</option>
                            </select>
                        </div>
                    </div>

                    {/* data table */}
                    <div className="campaign--main-body-table">


                        <table>
                            <thead>
                                <tr>
                                    <th><input type='checkbox' /></th>
                                    <th>On/Off</th>
                                    <th>Campaign</th>
                                    <th>Date Range</th>
                                    <th>Clicks</th>
                                    <th>Budget</th>
                                    <th>Location</th>
                                    <th>Platform</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            { campaigns.map((campaign) => (
                                <tr key={campaign.id}>
                                <td><input type='checkbox' /></td>
                                <td>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                </td>
                                <td>
                                    <div className='campaign--main-body-table-rows-campaign-col'>
                                        <img src={Cake} alt="cake" />
                                        <div>
                                            <p><strong>{campaign.product} campaign</strong></p>
                                            <p>Created on {campaign.created_at.substr(0,10)}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>{campaign.start_date} - {campaign.end_date}</td>
                                <td>300</td>
                                <td>INR {campaign.budget}</td>
                                <td>{campaign.location}</td>
                                <td className='campaign--main-body-table-rows-platform-col'>
                                    { campaign.platform  === 'FB'?
                                        <BsFacebook /> : ( campaign.platform  === 'Google' ? <BsGoogle /> :
                                    ( campaign.platform  === 'Youtube' ? <BsYoutube /> : <BsInstagram /> ))}
                                    
                                </td>
                                <td className='campaign--main-body-table-rows-status-col'>
                                    <p>Live now</p>
                                </td>
                                <td className='campaign--main-body-table-rows-actions-col'>
                                    <button><BiEditAlt /></button>
                                    <button><RiDeleteBinLine /></button>
                                </td>
                                </tr>
                            ))}

                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div className='campaign--main-body-table-rows-campaign-col'>
                                            <img src={Cake} alt="cake" />
                                            <div>
                                                <p><strong>Blueberry cake campaign</strong></p>
                                                <p>Created on 14 july</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>25 Jul 2020 - 01 Aug 2020</td>
                                    <td>300</td>
                                    <td>INR 3400</td>
                                    <td>Chennai</td>
                                    <td className='campaign--main-body-table-rows-platform-col'>
                                        <BsFacebook />
                                    </td>
                                    <td className='campaign--main-body-table-rows-status-col'>
                                        <p>Live now</p>
                                    </td>
                                    <td className='campaign--main-body-table-rows-actions-col'>
                                        <button><BiEditAlt /></button>
                                        <button><RiDeleteBinLine /></button>
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div className='campaign--main-body-table-rows-campaign-col'>
                                            <img src={Cake} alt="cake" />
                                            <div>
                                                <p><strong>Blueberry cake campaign</strong></p>
                                                <p>Created on 14 july</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>25 Jul 2020 - 01 Aug 2020</td>
                                    <td>300</td>
                                    <td>INR 3400</td>
                                    <td>Chennai</td>
                                    <td className='campaign--main-body-table-rows-platform-col'>
                                        <BsFacebook />
                                    </td>
                                    <td className='campaign--main-body-table-rows-status-col'>
                                        <p>Live now</p>
                                    </td>
                                    <td className='campaign--main-body-table-rows-actions-col'>
                                        <button><BiEditAlt /></button>
                                        <button><RiDeleteBinLine /></button>
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div className='campaign--main-body-table-rows-campaign-col'>
                                            <img src={Cake} alt="cake" />
                                            <div>
                                                <p><strong>Blueberry cake campaign</strong></p>
                                                <p>Created on 14 july</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>25 Jul 2020 - 01 Aug 2020</td>
                                    <td>300</td>
                                    <td>INR 3400</td>
                                    <td>Chennai</td>
                                    <td className='campaign--main-body-table-rows-platform-col'>
                                        <BsFacebook />
                                    </td>
                                    <td className='campaign--main-body-table-rows-status-col'>
                                        <p>Live now</p>
                                    </td>
                                    <td className='campaign--main-body-table-rows-actions-col'>
                                        <button><BiEditAlt /></button>
                                        <button><RiDeleteBinLine /></button>
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div className='campaign--main-body-table-rows-campaign-col'>
                                            <img src={Cake} alt="cake" />
                                            <div>
                                                <p><strong>Blueberry cake campaign</strong></p>
                                                <p>Created on 14 july</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>25 Jul 2020 - 01 Aug 2020</td>
                                    <td>300</td>
                                    <td>INR 3400</td>
                                    <td>Chennai</td>
                                    <td className='campaign--main-body-table-rows-platform-col'>
                                        <BsFacebook />
                                    </td>
                                    <td className='campaign--main-body-table-rows-status-col'>
                                        <p>Live now</p>
                                    </td>
                                    <td className='campaign--main-body-table-rows-actions-col'>
                                        <button><BiEditAlt /></button>
                                        <button><RiDeleteBinLine /></button>
                                    </td>
                                </tr>

                                <tr>
                                    <td><input type='checkbox' /></td>
                                    <td>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div className='campaign--main-body-table-rows-campaign-col'>
                                            <img src={Cake} alt="cake" />
                                            <div>
                                                <p><strong>Blueberry cake campaign</strong></p>
                                                <p>Created on 14 july</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>25 Jul 2020 - 01 Aug 2020</td>
                                    <td>300</td>
                                    <td>INR 3400</td>
                                    <td>Chennai</td>
                                    <td className='campaign--main-body-table-rows-platform-col'>
                                        <BsFacebook />
                                    </td>
                                    <td className='campaign--main-body-table-rows-status-col'>
                                        <p>Live now</p>
                                    </td>
                                    <td className='campaign--main-body-table-rows-actions-col'>
                                        <button><BiEditAlt /></button>
                                        <button><RiDeleteBinLine /></button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Campaign