import React, { createContext, useState, useEffect, useMemo } from 'react';
import { supabase } from '../initSupabase';
import { rarifyGetTrending } from '../api/rarify'
import { newsTrending } from '../api/news'
import { Session } from '@supabase/supabase-js';

type ContextProps = {
	user: null | boolean;
	session: Session | null;
	trendingNfts: [] | null;
	trendingNews: null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
	children: React.ReactNode;
}



const AuthProvider = (props: Props) => {
	// user null = loading
	const [user, setUser] = useState<null | boolean>(null);
	const [session, setSession] = useState<Session | null>(null);
	const [trendingNfts, setTrendingNfts] = useState<[] | null>(null);
	const [trendingNews, setTrendingNews] = useState<null>(null);
	
	useMemo(async () => {
		console.log('Use Memo for Trending NFTs and News')
		const TrendingList = rarifyGetTrending();
		if (TrendingList !== null) {
			setTrendingNfts(TrendingList?.data)
			// Get/Set Trending News of SCREWD Topics 
			// const newstrends = newsTrending();
			// setTrendingNews(newstrends)
			console.log('HI', trendingNfts)
		}
	}, [user])


	useEffect(() => {
		const session = supabase.auth.session();
		setSession(session);
		setUser(session ? true : false);
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				console.log(`Supabase auth event: ${event}`);
				setSession(session);
				setUser(session ? true : false);
			}
		);
		return () => {
			authListener!.unsubscribe();
		};

	}, [user]);

	return (
		<AuthContext.Provider
			value={{
				user,
				session,
				trendingNfts,
				trendingNews
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
