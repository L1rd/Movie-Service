import { FC, MouseEvent, useState } from 'react';
import { ExpandMore, Help } from '@mui/icons-material';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Button,
	Chip,
	FormControl,
	FormControlLabel,
	FormLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	SelectChangeEvent,
	Slider,
	TextField,
	Tooltip,
	Typography,
	useTheme,
} from '@mui/material';
import { CERTIFICATIONS, GENRES, SORT_METHODS } from 'utils/consts';
import { FLEX_CENTER } from 'utils/mui/style';
import { AccordionItem } from './Item';

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: '200px',
			width: 150,
			border: '1px solid rgba(0,0,0,0.15)',
			boxShadow: 'none',
			top: '272px !important',
		},
	},
};

const userScore = [
	{
		value: 0,
		label: '0',
	},
	{
		value: 1,
		label: '',
	},
	{
		value: 2,
		label: '',
	},
	{
		value: 3,
		label: '',
	},
	{
		value: 4,
		label: '',
	},
	{
		value: 5,
		label: '5',
	},
	{
		value: 6,
		label: '',
	},
	{
		value: 7,
		label: '',
	},
	{
		value: 8,
		label: '',
	},
	{
		value: 9,
		label: '',
	},
	{
		value: 10,
		label: '10',
	},
];

const userVotes = [
	{
		value: 0,
		label: '0',
	},
	{
		value: 50,
		label: '',
	},
	{
		value: 100,
		label: '100',
	},
	{
		value: 150,
		label: '',
	},
	{
		value: 200,
		label: '200',
	},
	{
		value: 250,
		label: '',
	},
	{
		value: 300,
		label: '300',
	},
	{
		value: 350,
		label: '',
	},
	{
		value: 400,
		label: '400',
	},
	{
		value: 450,
		label: '',
	},
	{
		value: 500,
		label: '500',
	},
];

const runtime = [
	{
		value: 0,
		label: '0',
	},
	{
		value: 15,
		label: '',
	},
	{
		value: 30,
		label: '',
	},
	{
		value: 45,
		label: '',
	},
	{
		value: 60,
		label: '',
	},
	{
		value: 75,
		label: '',
	},
	{
		value: 90,
		label: '',
	},
	{
		value: 105,
		label: '',
	},
	{
		value: 120,
		label: '120',
	},
	{
		value: 135,
		label: '',
	},
	{
		value: 150,
		label: '',
	},
	{
		value: 165,
		label: '',
	},
	{
		value: 180,
		label: '',
	},
	{
		value: 195,
		label: '',
	},
	{
		value: 210,
		label: '',
	},
	{
		value: 215,
		label: '',
	},
	{
		value: 240,
		label: '240',
	},
	{
		value: 255,
		label: '',
	},
	{
		value: 270,
		label: '',
	},
	{
		value: 285,
		label: '',
	},
	{
		value: 300,
		label: '',
	},
	{
		value: 315,
		label: '',
	},
	{
		value: 330,
		label: '',
	},
	{
		value: 345,
		label: '',
	},
	{
		value: 360,
		label: '360',
	},
	{
		value: 375,
		label: '',
	},
	{
		value: 390,
		label: '',
	},
	{
		value: 400,
		label: '',
	},
];

export const MovieAccordion: FC = () => {
	const [sortMethod, setSortMethod] = useState('Popularity Descending');

	const [genresValues, setGenresValues] = useState<string[]>([]);

	const [certificationValues, setCertificationValues] = useState<string[]>([]);

	const [rangeUserScore, setRangeUserScore] = useState<number[]>([0, 10]);

	const [rangeRuntime, setRangeRuntime] = useState<number[]>([0, 400]);

	const handleChangeRangeUserScore = (event: Event, newValue: number | number[]) => {
		setRangeUserScore(newValue as number[]);
	};

	const handleChangeRangeRuntime = (event: Event, newValue: number | number[]) => {
		setRangeRuntime(newValue as number[]);
	};

	const handleChangeSortMethod = (event: SelectChangeEvent) => {
		setSortMethod(event.target.value);
	};

	const theme = useTheme();

	const handleSetCertificationValues = (e: MouseEvent<HTMLElement>) => {
		if (!certificationValues.includes(e.currentTarget.innerHTML)) {
			const newArray: string[] = [];
			newArray.push(e.currentTarget.innerHTML);
			setCertificationValues([...certificationValues, ...newArray]);
		} else {
			const newsArray = certificationValues.filter((item: string) => item !== e.currentTarget.innerHTML);
			setCertificationValues([...newsArray]);
		}
	};

	const handleSetGenresValues = (e: MouseEvent<HTMLElement>) => {
		if (!genresValues.includes(e.currentTarget.innerHTML)) {
			const newArray: string[] = [];
			newArray.push(e.currentTarget.innerHTML);
			setGenresValues([...genresValues, ...newArray]);
		} else {
			const newsArray = genresValues.filter((item: string) => item !== e.currentTarget.innerHTML);
			setGenresValues([...newsArray]);
		}
	};

	return (
		<Box sx={{ width: '260px', marginRight: '30px' }}>
			<Accordion sx={{ marginBottom: '13px' }} defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography>Sort</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ padding: '15px' }}>
					<Typography sx={{ marginBottom: '10px' }} variant="h6">
						Sort results by
					</Typography>
					<Select
						MenuProps={MenuProps}
						value={sortMethod}
						placeholder="sort"
						onChange={handleChangeSortMethod}
						sx={{
							background: '#E4E7EB',
							border: '1px solid #E4E7EB',
							borderRadius: '4px',
							height: '35.59px',
							width: '100%',
						}}
					>
						{SORT_METHODS.map((label: string) => (
							<MenuItem key={label} value={label}>
								{label}
							</MenuItem>
						))}
					</Select>
				</AccordionDetails>
			</Accordion>
			<Accordion sx={{ marginBottom: '12px' }}>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography>Filters</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ padding: '0' }}>
					<AccordionItem>
						<FormControl>
							<FormLabel sx={{ marginBottom: '10px' }}>
								Show Me{' '}
								<Tooltip title="Log in to filter items you've watched.">
									<Help
										sx={{
											height: '16px',
											color: 'lightgrey',
										}}
									/>
								</Tooltip>
							</FormLabel>
							<RadioGroup defaultValue="everything">
								<FormControlLabel
									value="everything"
									control={<Radio sx={{ padding: '0px 5px 0 8px' }} />}
									label="Everything"
								/>
								<FormControlLabel
									value="movies I Haven't Seen"
									control={<Radio sx={{ padding: '0px 5px 0 8px' }} />}
									label="Movies I Haven't Seen"
									sx={{ marginTop: '6px' }}
								/>
								<FormControlLabel
									value="movies I Have Seen"
									control={<Radio sx={{ padding: '0px 5px 0 8px' }} />}
									label="Movies I Have Seen"
									sx={{ marginTop: '6px' }}
								/>
							</RadioGroup>
						</FormControl>
					</AccordionItem>
					<AccordionItem title="Release Dates">
						<Box sx={{ ...FLEX_CENTER, justifyContent: 'space-between', marginBottom: '8px' }}>
							<Typography>from</Typography>
							<TextField
								type="date"
								sx={{
									'& input': {
										padding: '6px 12px',
									},
								}}
							/>
						</Box>
						<Box sx={{ ...FLEX_CENTER, justifyContent: 'space-between' }}>
							<Typography>to</Typography>
							<TextField
								type="date"
								sx={{
									'& input': {
										padding: '6px 12px',
									},
								}}
							/>
						</Box>
					</AccordionItem>
					<AccordionItem title="Genres">
						<Box>
							{GENRES.map((item: string) => (
								<Chip
									label={item}
									variant="outlined"
									onClick={handleSetGenresValues}
									sx={{
										margin: '0 6px 8px 0',
										backgroundColor: genresValues.includes(item)
											? `${theme.palette.lightBlue}`
											: 'inherit',
										borderColor: genresValues.includes(item)
											? `${theme.palette.lightBlue}`
											: '#9e9e9e',
										color: genresValues.includes(item) ? `${theme.palette.white}` : 'black',
										'&:hover': {
											backgroundColor: `${theme.palette.lightBlue} !important`,
											borderColor: `${theme.palette.lightBlue}`,
											color: `${theme.palette.white}`,
										},
									}}
								/>
							))}
						</Box>
					</AccordionItem>
					<AccordionItem title="Certification">
						<Box>
							{CERTIFICATIONS.map((item: string) => (
								<Chip
									label={item}
									variant="outlined"
									onClick={handleSetCertificationValues}
									sx={{
										margin: '0 6px 8px 0',
										backgroundColor: certificationValues.includes(item)
											? `${theme.palette.lightBlue}`
											: 'inherit',
										borderColor: certificationValues.includes(item)
											? `${theme.palette.lightBlue}`
											: '#9e9e9e',
										color: certificationValues.includes(item) ? `${theme.palette.white}` : 'black',
										'&:hover': {
											backgroundColor: `${theme.palette.lightBlue} !important`,
											borderColor: `${theme.palette.lightBlue}`,
											color: `${theme.palette.white}`,
										},
									}}
								/>
							))}
						</Box>
					</AccordionItem>
					<AccordionItem title="User Score">
						<Slider
							getAriaLabel={() => 'Views range'}
							step={1}
							marks={userScore}
							value={rangeUserScore}
							onChange={handleChangeRangeUserScore}
							min={0}
							max={10}
							valueLabelDisplay="auto"
							sx={{
								color: `${theme.palette.lightBlue} !important`,
								'& .MuiSlider-markLabel': {
									fontSize: '.92em',
								},
								'& .MuiSlider-rail': { color: `${theme.palette.lightGrey}` },
							}}
						/>
					</AccordionItem>
					<AccordionItem title="Minimum User Votes">
						<Slider
							step={50}
							marks={userVotes}
							min={0}
							max={500}
							valueLabelDisplay="auto"
							sx={{
								color: `${theme.palette.lightBlue} !important`,
								'& .MuiSlider-markLabel': {
									fontSize: '.92em',
								},
								'& .MuiSlider-rail': { color: `${theme.palette.lightGrey}` },
							}}
						/>
					</AccordionItem>
					<AccordionItem title="Runtime">
						<Slider
							step={15}
							marks={runtime}
							min={0}
							max={400}
							value={rangeRuntime}
							onChange={handleChangeRangeRuntime}
							valueLabelDisplay="auto"
							sx={{
								color: `${theme.palette.lightBlue} !important`,
								'& .MuiSlider-markLabel': {
									fontSize: '.92em',
								},
								'& .MuiSlider-rail': { color: `${theme.palette.lightGrey}` },
							}}
						/>
					</AccordionItem>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography>Where To Watch</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
						amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Button variant="catalogButton" sx={{ marginTop: '20px' }}>
				Search
			</Button>
		</Box>
	);
};
