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
import { useRouter } from 'next/router';
import Error from 'next/error';
import moment from 'src/utils/moment';
import {
	FacebookShareButton,
	FacebookMessengerShareButton,
	FacebookMessengerIcon,
	LinkedinShareButton,
	TwitterShareButton,
	TelegramShareButton,
	WhatsappShareButton,
	RedditShareButton,
	EmailShareButton,
	LivejournalShareButton,
	MailruShareButton,
	ViberShareButton,
	WorkplaceShareButton,
	FacebookIcon,
	TwitterIcon,
	LinkedinIcon,
	TelegramIcon,
	WhatsappIcon,
	RedditIcon,
	MailruIcon,
	EmailIcon,
	LivejournalIcon,
	ViberIcon,
	WorkplaceIcon,
} from 'react-share';
import urls from 'src/constants/urls';

import { getBySlug } from 'src/redux/actions/article';
import Head from 'src/components/Head';

import classes from './style.module.less';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Learn = (props) => {
	// const { } = props;
	const router = useRouter();
	const { slug } = router.query || {};

	const dispatch = useDispatch();

	const { value: data = {}, loading, retry } = useAsyncRetry(async () => {
		if (!slug) {
			return {};
		}

		const response = await dispatch(await getBySlug({
			slug,
			filter: {
				include: [
					{
						relation: 'category',
					},
				],
			},
		}));

		return response;
	}, [slug]);

	if (!data.id && !loading) {
		return <Error statusCode={404} />;
	}

	const shareUrl = urls.WEB_URL + '/articles/' + data.slug;
	const title = data.title;

	return (
		<div className="box">
			<Head title={data.title} />

			<div className="pt-2">
				<div className="container pt-5 pt-md-0">
					<div className="row pt-5 pt-md-0">
						<div className="col-12 pt-5 pt-md-0">
							<div className="text-muted mb-2">
								<strong className="text-primary">{data.category?.name}</strong> - {moment(data.publishedDate).format('LL')}
							</div>
							<h1 className="fs-xxl">{data.title}</h1>
							<div className="d-flex">
								<div className={classes.shareItem}>
									<FacebookShareButton
										url={shareUrl}
										quote={title}
									>
										<FacebookIcon size={26} round />
									</FacebookShareButton>
								</div>

								<div className={classes.shareItem}>
									<FacebookMessengerShareButton
										url={shareUrl}
										appId="521270401588372"
									>
										<FacebookMessengerIcon size={26} round />
									</FacebookMessengerShareButton>
								</div>

								<div className={classes.shareItem}>
									<TwitterShareButton
										url={shareUrl}
										title={title}
									>
										<TwitterIcon size={26} round />
									</TwitterShareButton>
								</div>

								<div className={classes.shareItem}>
									<TelegramShareButton
										url={shareUrl}
										title={title}
									>
										<TelegramIcon size={26} round />
									</TelegramShareButton>
								</div>

								<div className={classes.shareItem}>
									<WhatsappShareButton
										url={shareUrl}
										title={title}
										separator=":: "
									>
										<WhatsappIcon size={26} round />
									</WhatsappShareButton>
								</div>

								<div className={classes.shareItem}>
									<LinkedinShareButton url={shareUrl}>
										<LinkedinIcon size={26} round />
									</LinkedinShareButton>
								</div>

								<div className={classes.shareItem}>
									<RedditShareButton
										url={shareUrl}
										title={title}
										windowWidth={660}
										windowHeight={460}
									>
										<RedditIcon size={26} round />
									</RedditShareButton>
								</div>

								<div className={classes.shareItem}>
									<LivejournalShareButton
										url={shareUrl}
										title={title}
										description={shareUrl}
									>
										<LivejournalIcon size={26} round />
									</LivejournalShareButton>
								</div>

								<div className={classes.shareItem}>
									<MailruShareButton
										url={shareUrl}
										title={title}
									>
										<MailruIcon size={26} round />
									</MailruShareButton>
								</div>

								<div className={classes.shareItem}>
									<EmailShareButton
										url={shareUrl}
										subject={title}
										body="body"
									>
										<EmailIcon size={26} round />
									</EmailShareButton>
								</div>
								<div className={classes.shareItem}>
									<ViberShareButton
										url={shareUrl}
										title={title}
									>
										<ViberIcon size={26} round />
									</ViberShareButton>
								</div>

								<div className={classes.shareItem}>
									<WorkplaceShareButton
										url={shareUrl}
										quote={title}
									>
										<WorkplaceIcon size={26} round />
									</WorkplaceShareButton>
								</div>
							</div>
							<div className="mt-2">
								{
									data.hashtag?.map((el) => {
										return (
											<span key={el} className={classes.tag}>#{el}</span>
										);
									})
								}
							</div>
							<div className="ql-editor mt-5" dangerouslySetInnerHTML={{ __html: data.content }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Learn.propTypes = propTypes;

Learn.defaultProps = defaultProps;

export default Learn;
