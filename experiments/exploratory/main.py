from pandas_profiling import ProfileReport
import pandas as pd

df = pd.read_csv("combined_data_clear_finale.csv")
prof = ProfileReport(df)
prof.to_file(output_file='result.html')
