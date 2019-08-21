import styled, { css } from 'styled-components';

const activeBckg = 'background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTUgMzciPjxwYXRoIGQ9Ik0yMDcuNiAxNy4xQzIwNS45IDEwLjQgMjA0LjMgMSAxOTggMUgxOC4zYy00LjggMC02LjMgNS45LTcuNCA5LjQtMi4yIDcuMS00LjYgMTQuMS03LjIgMjEuMUMzIDMzLjYgMi42IDM2LjEgMCAzN2gyMTVjLTEuMy0xLjEtNC40LTcuOC03LjQtMTkuOXoiIGZpbGw9IiMwOTUxOGYiLz48L3N2Zz4=)';
const normalBckg = 'background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjE1IDM3Ij48aW1hZ2Ugd2lkdGg9IjIyNCIgaGVpZ2h0PSI2MCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPQUFBQUE4Q0FZQUFBQi8wYmExQUFBQUNYQklXWE1BQUFzU0FBQUxFZ0hTM1g3OEFBQUEgR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQnFSSlJFRlVlTnJzblF1UDRqZ1FoTzFnSHJldiAvLzlIYjRZQW05d2h1YlZGVC91UkVQSmdxeVFMQXFNOVR2SkhWYmRqNHh4RlVSUkZVUlJGelNyL2wvLzNLZXF1L2wwQjhJU1BlZ01JICt5MEI2QlBYbmdCU0d3S3dMN3krT2dCOUFqcWZlWitpMWdvaEF0aG4zbDhGZ0JxNDNMVWpsTlNLWWJQZ3kxMHZEcUNHclZIZ3BWNG4gZ05SYTNlNCtPblZ0dmY0MGhHRkMrQnJqVVk4YUVDbHFiZ2d0d0RwajROL0x0WDhHd2pBaGZBTFdMajdmSlo0M0NrSUNTSzBGUUlUdCBkeHo2dVkrUGJnb0l3NFR3TlFCYmlBT2ZCd05HUWtpdENUNE4zRFUrM21Cb1BRVmhlQkkrcjhDN2ozMzhkL2RxeUdzV2dKNzFJTFZBIDNkY2JBQXB3VnpWa25ndVVGc2lESVh6R0FWUHdIZUxqTVQ0L3hPY0lZa2hBU0FDcEpRRHNES2U3L0QvYStIaUJ1Vzc5bTkzWWhrd1kgQVo0ejRxZEVUUVR1bi9oNGl1TUFJd0MwYk1oUVN6ZGV0UE1KZlBkeGpxTXg1cVoyVVRmVUJjZEdVTXNCeGYxT0VUNFozK0xqQ1Z3eCBGMFVwYWc0SWRlTUZZK2NaUmdDajBLNW5BZml5Q0ZycmZxY0kzWGNZR3NLOWlxRU5IWkJheUFFdDkvdU00d1BtcU5Xd1FZRDlHQmNjIEUwRzErd1VBOEFTdWR3ZnZaeHdhd2xJTXBhaTVIQkFCdkVUWFE2TkE5MHN0VVRRQTRTQVhIQnRCVTgwWHFmMFF2bDhBSVFJb0x0Z1kgK1pvZ1VuTTBZWFQ4UkFERkpEejg3YzFvMXV6aWU0MktvcE1DNkJNT2FNVlBjY0FmQU9DdmVQMk5BRkliQVBBSWN4TWo1eFgrN2hMLyBSdHdRMmFoZWtoaFRBMXIxbnl3N25NQUIwUVYvUmdDL2c3MkhCSUNFajVxckJrUUE3Nk9ONW9DeEUrdERYSlpvNDJ1M2hJRzh0QWJFICtHa3RQd2lFUDhBSlN3QmE4QkZHYW1ybncyc05vQ1N6QmlCQytENmpRMW9KcmhrVFEwTWxkTTVvdmpUdThZNFhYUE9UR0dwMVF6R0MgNmlZTTRhUG1oQkNiTUZmMzJQSHNBTHd6ek8yakFuQ1hLS09xbkhCc0RaaHF3T2cxUUd0b0FIM0dBU25xbFRCMjRISzQzaWV2WGNENSA5REthdnF2TEczWGdwQkhVSitvL0hVRlA4R0VSdXBPejF3RUpJTFUwZ0ZnRzllQ0lyWnEzNkg0cEIvUkQ2c0JRQVYwS1Bxdit3M0ZTIDEvakIyUUdsMWhCRnBSR0RydFdwc2tyUDRVTW1namF2Y01CVS9NVDZUenRnN2hzamRUTTJBYVNXQUJEbm55d3I2SjA4R2p5RXIzUkwgWlJiR0lUVmdLbjd1RXc2WWdzK3liQUpJTFNtcnM3K3ZHTUY5M1d3K1dRU3RpWi82MitHWStiYkl3VWZvcURsaFN3R281M2Nvd0tlWCAwZ2JYZ1dOcXdCU0EydjMyRmNVcXR5RlJTMGJSM0IxZStqU0h2V0VzZXlPR0Rxb0RtNG5pNXlIaGZEV2RJc0pITGUyRXZnRGhFQmNjIFpDN05EUEdUWjhCUVd3U3hLVVJSM1ZCTUxjajdWOVNBb2FKTGxJTXYxNW1pcUxtanFCc1lSVXVObU9vWVdsTUQxaFNvaDRJMVcvRDEgRmNVeFJjMEJuc3ZFVVozNmdzc3ZxNVhNcGdpZ3I4akZPMWZYbnJXNm5IcjcvdUJOakJRMU1ZVFcwUkt1QUdGd2RldUIyZTFKWVVBdSB0cG93d2RVdHNPT2VLcXNEUlZGckFGQ2ZnTzBMODMrWG1QZlZ5eEZESXFqbGdrRTlhcmZETGZ4ZXdjZjFQMnB0RU9KeEV6TDZRbjJvIGE3K25JMmdxQzN0WC8xc1B2ZnFmdUxtdjk5MFJQbXBORUtJTHl2NUFQUHVsU3pDUiswR2lZaU5tNksxbzFyRGNUall4eXBrYW5TdnYgbTZLb0pac3dGb0FYOTJmWE84TFlWM0R4dEFOYVRSbEwra2h2MmJJdmtWUnZkdVRtVzJydEFPcGpLRnFBMFFKeDlCd09CUkJ5NjNiNiBSeXhrODZKczZaY1ltdHI1VHVpb05UZGpyS01vTEJCL3UvUXhGTVVkOG1IRUI3VWNUNzRsUHR6amp1TFcyZWQvRWtCcUN3RGkvUDZJIDR3enovWlp4eEZFT1dDcE90ZXUxOEEwUklKTGUzN04ydnJQNVFtMmxHYU5qNkRrQytHK2M3ekwzc1ViRVpZeXF3NW1DOFFGOHdmbncgUXgzaWgybWcyWUx2N1J4UHY2YTJDNkFNT1MrMEZzSytzdTZzZHNBdUFXQndqMHNQOHNNV1IvZjFIam5HVDJwck1SUkxyVGJqaERrWCBIQjFCKzRRbFN5N0djeEFsTTU5VjlOUnJob1NQMmdxRStIUFYrbURlVDZNeGcydUhmVzBNclduQ1dPNm4xLytrSnRRM3FWcUw5QVNRIDJvb0w2b2JNVmZVK1dvRFFjc0hSVFJqTGpuRk56eWxubEE5VjJ2M3VDQ0cxY3Znc0FMVUI0VzlFdEhDZGFzUU11aE5HNzFEb0V6VGogdDRPczlkWHNmcWVvTGRhRENDSCtVQXU2bzI3RTlMa0dURTBONkJJQVdsMVI3SFl5ZWxMdkdFWDE3d2xhendjdFJlUWlxTjZuMXhrQSBDblJYOStjT2NjK21DL1dtVFpsZU9aeUdyaHZpZmpWTm1ONW95TWlIYWR6alZpTXJjaEkrNmgwZ3RDSnBuNEN1dWdOYTQwN1c2V1UxIHc3SHBRcjFaVThabElMT2c2MHZ1Vnd1R0w4RG9DQjMxbDhMb0N0QTk3WUN1QUZhcXppTjgxRHREbUlLc3F1NTdCcFJhMEFnZzllNEEgbHNCMHJ3Q1FnRkhVTUVBWEFZbUFVZ1NNb2lpS29xaUUvaE5nQU5MQUVub1p4ekR2QUFBQUFFbEZUa1N1UW1DQyIgdHJhbnNmb3JtPSJtYXRyaXgoLjk5NTUgMCAwIC45ODMzIC0zLjk2NyAtNi4yMTcpIiBvdmVyZmxvdz0idmlzaWJsZSIgb3BhY2l0eT0iLjUiLz48cGF0aCBkPSJNMjAzLjkgMzdjLTEuMS0xLjgtMi4yLTcuMi00LTE0LjQtMS40LTUuNC0yLjEtMTMuNy04LjEtMTMuNy05LjIuMS0xNjIuNy4xLTE2Ny4zLjEtNC41IDAtNS45IDUuNS02LjkgOC44LTIgNi41LTQuMiAxMi45LTYuNSAxOS4zbDE5Mi44LS4xeiIgZmlsbD0iIzA2Mzg2MyIvPjwvc3ZnPg==)';

const activeTab = css`
  z-index: 10!important;
  cursor: default;
  margin-bottom: -1px;
  margin-left: 10px;
`;

const tabSide = css`
  flex-shrink: 0;
  flex-grow: 0;
  width: 30px;
  background-position: 0 100%;
`;

const tabContent = css`
  height: 37px;
  background-repeat: no-repeat;
  background-clip: padding-box;
  background-size: cover;
  background-position: 50%;
  ${normalBckg};
  background-size: auto 37px;
  ${props => props.active && activeBckg};
`;

export const TabContentLeft = styled.div`
  ${tabContent};
  ${tabSide};
`;

export const TabContentRight = styled.div`
  ${tabContent};
  ${tabSide};
  width: 30px;
  background-position: 100% 100%;
`;

export const TabTitle = styled.div`
  position: absolute;
  left: 45px;
  right: 40px;
  bottom: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 2px;
  margin-right: 2px;
  color: #fff;
  & > span {
    font-family: Roboto,sans-serif;
    font-size: 12px;
    line-height: 18px;
    color: #fff;
  }
`;

export const IconWrap = styled.div`
  position: absolute;
  left: 32px;
  bottom: 15px;
  width: 10px;
  height: 10px;
`;

export const TabClose = styled.div`
  position: absolute;
  right: 30px;
  bottom: 10px;
  width: 10px;
  height: 10px;
  opacity: .5;
  cursor: pointer;
  background-repeat: no-repeat;
  background-clip: padding-box;
  background-size: cover;
  background-position: 50%;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNy40NiAyNy40NiI+PHBhdGggZD0iTTI3LjE2IDIxLjUxbC03Ljc4LTcuNzggNy43OC03Ljc4YTEgMSAwIDAgMCAwLTEuNDFMMjIuOTIuMjlhMSAxIDAgMCAwLTEuNDEgMGwtNy43OCA3Ljc4TDUuOTUuMjlhMSAxIDAgMCAwLTEuNDEgMEwuMjkgNC41NGExIDEgMCAwIDAgMCAxLjQxbDcuNzggNy43OC03Ljc4IDcuNzhhMSAxIDAgMCAwIDAgMS40MWw0LjI0IDQuMjRhMSAxIDAgMCAwIDEuNDEgMGw3Ljc4LTcuNzggNy43OCA3Ljc4YTEgMSAwIDAgMCAxLjQxIDBsNC4yNC00LjI0YTEgMSAwIDAgMCAuMDEtMS40MXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=);
`;

export const TabContentCenter = styled.div`
  ${tabContent};
  background-position: bottom;
  width: 100%;
  min-width: 40px;
  ${TabTitle} {
    ${props => props.active && `bottom: 10px`};
  }
  ${TabClose} {
    ${props => props.active && `
      right: 25px;
      bottom: 15px;
    `};
  }
  ${IconWrap} {
    ${props => props.active && `
      left: 25px;
      bottom: 17px;
    `}
  }
`;

export const TabWrap = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  z-index: 1;
  margin-left: -35px;
  ${props => props.active && activeTab};
  ${TabContentRight} {
    ${props => props.active && activeBckg };
  }
  ${TabContentLeft} {
    ${props => props.active && activeBckg};
  }
`;