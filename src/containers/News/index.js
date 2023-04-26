/* eslint-disable @next/next/no-html-link-for-pages */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-01-16 21:05:31
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { getList, getListRss } from 'src/redux/actions/article';
import { getList as getListCategory } from 'src/redux/actions/category';

import { Input, Space } from 'antd';

import Loader from 'src/components/Loading';
import PageTitle from 'src/components/PageTitle';
import NewsListWidget from 'src/components/FactSetWidgets/NewsList';

import NewsItem from './NewsItem';
import RssItem from './RssItem';
import classes from './style.module.less';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Learn = (props) => {
	// const { } = props;

	const [textSearch, setTextSearch] = React.useState('');
	const [categorySelected, setCategorySelected] = React.useState('');

	const filterInit = React.useMemo(() => {
		return {
			skip: 0,
			limit: 300,
			where: {
				publishedDate: { lte: +new Date() },
				state: 'published',
			},
			include: [
				{
					relation: 'category',
				},
			],
		};
	}, []);

	const dispatch = useDispatch();

	const { value: list = {}, loading, retry } = useAsyncRetry(async () => {
		const where = {};

		if (textSearch) {
			const regex = '/' + textSearch + '/i';

			where.or = [
				{ title: { regexp: regex } },
				{ summary: { regexp: regex } },
			];
		}

		if (categorySelected) {
			where.categoryId = categorySelected;
		}

		const response = await dispatch(await getList({
			firstLoad: true,
			filter: {
				...filterInit,
				skip: 0,
				where: {
					...filterInit.where,
					...where,
				},
			},
		}));

		return response;
	}, [textSearch, categorySelected]);

	const { value: listRss = {}, loading: loadingRss } = useAsyncRetry(async () => {
		const response = await dispatch(await getListRss());

		return response;
	}, []);

	const { value: listCategory = {} } = useAsyncRetry(async () => {
		const response = await dispatch(await getListCategory({
			firstLoad: true,
			filter: {
				skip: 0,
				limit: 300,
				where: {},
			},
		}));

		return response;
	}, []);

	const [firstNew = {}, secondNew = {}, thirdNew = {}, ...newsList] = list?.data || [];

	return (
		<div className="">
			{
				(loading || loadingRss) && <Loader />
			}
			<PageTitle
				title="News"
				action={
					<Space>
						<Input className="mr-3 flex-1" placeholder="Search..." />
						<ul className={classes.nav + ' nav'}>
							<li key="all" className="nav-item">
								<a className="nav-link" onClick={() => setCategorySelected('')}>All</a>
							</li>
							{
								listCategory.data?.map((el) => {
									return (
										<li key={el.id} className={classes.item}>
											<a className={'nav-link ' + (categorySelected === el.id ? classes.active : '')} onClick={() => setCategorySelected(el.id)}>{el.name}</a>
										</li>
									);
								})
							}
						</ul>
					</Space>
				}
			/>
			<section className="">
				<div className=" pt-md-0">
					{
						(list.total === 0 && listRss.items?.length === 0) && !loading ?
							<div className="my-5 text-center">
								<h3 className="text-center">No article to show</h3>
							</div> :
							<>
								{
									(categorySelected || textSearch) ?
										<div className="row mb-5">
											<div className="col-12">
												{
													list?.data?.map((el) => {
														return (
															<NewsItem
																key={el.id}
																data={el}
															/>
														);
													})
												}
											</div>
										</div> :
										<>
											<div className="row mb-5">
												<div className="col-lg-8">
													<Link href={'/news/' + firstNew.slug}>
														<div className={classes.bigNew}>
															<div
																className={classes.bigImg}
																style={{
																	backgroundSize: 'cover',
																	objectFit: 'cover',
																	backgroundImage: `url("${firstNew.thumbnail}")`,
																}}
															/>
															<div className={classes.bigText}>
																<h5 className={classes.bigNewTitle}>
																	{firstNew.title}
																</h5>
																<div className={classes.bigNewContent}>
																	{firstNew.summary}
																</div>
															</div>
														</div>
													</Link>
												</div>
												<div className="col-lg-4 pl-md-0">
													<Link href={'/news/' + secondNew.slug}>
														<div className={classes.bigNew}>
															<div
																className={classes.bigImgSecond}
																style={{
																	backgroundSize: 'cover',
																	objectFit: 'cover',
																	backgroundImage: `url("${secondNew.thumbnail}")`,
																}}
															/>
															<div className={classes.bigTextSecond}>
																<h5 className={classes.bigNewTitle}>
																	{secondNew.title}
																</h5>
																<div className={classes.bigNewContent}>
																	{secondNew.summary}
																</div>
															</div>
														</div>
													</Link>
													<Link href={'/news/' + thirdNew.slug}>
														<div className={classes.bigNew}>
															<div
																className={classes.bigImgSecond}
																style={{
																	backgroundSize: 'cover',
																	objectFit: 'cover',
																	backgroundImage: `url("${thirdNew.thumbnail}")`,
																}}
															/>
															<div className={classes.bigTextSecond}>
																<h5 className={classes.bigNewTitle}>
																	{thirdNew.title}
																</h5>
																<div className={classes.bigNewContent}>
																	{thirdNew.summary}
																</div>
															</div>
														</div>
													</Link>
												</div>
											</div>
											<div className="row">
												<div className="col-12">
													{
														newsList.map((el) => {
															return (
																<NewsItem
																	key={el.id}
																	data={el}
																/>
															);
														})
													}
												</div>
											</div>
										</>
								}
							</>
					}
					<div className="mb-5">
						<NewsListWidget />
					</div>
					<div className="row mb-5">
						<div className="col-12">
							{
								listRss?.items?.map((el) => {
									return (
										<RssItem
											key={el.guid + el.isoDate}
											data={el}
										/>
									);
								})
							}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

Learn.propTypes = propTypes;

Learn.defaultProps = defaultProps;

export default Learn;
