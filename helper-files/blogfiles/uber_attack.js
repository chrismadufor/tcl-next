const uber_attack = `
Just like you, I stumbled on the news about the massive data breach suffered by <a class="font-semibold text-blue-500" href="https://www.linkedin.com/company/uber-com/">Uber</a> last week. The attack was attributed to the notorious Lapsus$ hacking group, which has been increasingly active in recent months. Researchers say the incident has highlighted the risks associated with overconfidence in the use of multifactor authentication (MFA), as well as unmanaged risk around cloud-service adoption. <br><br>

A well-known tactic that the Lapsus$ hacking group has been known to use is co-opt MFA-circumventing tools into its attack chain. In a statement released by Uber yesterday, it was noted that  the attacker who breached its network last week had first obtained the VPN credentials of an external contractor, likely by purchasing them on the Dark Web. The attacker then repeatedly tried to log in to the Uber account using the illegally obtained credentials, prompting a two-factor login approval request each time. <br><br>

Sad to note that this can happen to any organization, hence, it is important to focus our lens on learning how to protect against such attack scenarios for our various organization rather than be caught unawares or worst still, play the blame-game. <br><br>
Here is what an expert- Reet Kaur, a Board Member and Advisor to Cisco highlights the following as controls to be taken amongst other expert opinions: <br>

<ol style="padding: 20px; list-style: number"> 
<li><b>Consider Implementing <a class="text-blue-500" href='https://www.linkedin.com/feed/hashtag/?keywords=zerotrust&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6977704982821167104' >zerotrust (ZT)</a> -</b><br> ZT can address these types of attacks by authenticating every transaction. </li>

<li><b>Enable <a class="text-blue-500" href="https://www.linkedin.com/feed/hashtag/?keywords=redteam&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6977704982821167104">redteam</a> / <a class="text-blue-500" href="https://www.linkedin.com/feed/hashtag/?keywords=pentesters&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6977704982821167104">pentesters</a> to work as hackers-</b><br>
 Uber has a great pen test team, but most security <a class="text-blue-500" href="https://www.linkedin.com/feed/hashtag/?keywords=teams&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6977704982821167104">teams</a> are forced to be restricted to being on the offensive to avoid disruption to the operations. A hacker would have no such limitation. While allow a hacker to uncover your organization’s vulnerabilities with damages more disruptive than that to your daily operations. Your reputation is at risk. </li>

<li><b>Implement multiple-layer security controls-</b><br>
Security is a <a class="text-blue-500" href="https://www.linkedin.com/feed/hashtag/?keywords=people&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6977704982821167104">people</a> <a class="text-blue-500" href="https://www.linkedin.com/feed/hashtag/?keywords=processes&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6977704982821167104">processes</a> and <a class="text-blue-500" href="https://www.linkedin.com/feed/hashtag/?keywords=technology&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6977704982821167104">technology</a> play. Implement security controls at multiple layers so that if one control plane fails, another one protects. Continue providing <a class="text-blue-500" href="https://www.linkedin.com/feed/hashtag/?keywords=training&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6977704982821167104">training</a> to employees but don’t expect flawless execution from them all the time as security is only 1 % of their job responsibilities and human error is always present. </li>

<li><b>Implement <a class="text-blue-500" href="https://www.linkedin.com/feed/hashtag/?keywords=changemanagement&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6977704982821167104">changemanagement</a> | Separation of Duties | Dual Control-</b><br>
This is to make sure that NO ONE privilege account can disable critical implementations like MFA without going through proper verifications and approvals. </li>

<li><b>Set exhaustion limits on MFA-</b><br>
Failed attempts for more than 5-6 times should disable the account & require call back to enable the account which may reduce risk of MFA getting compromised. </li>

<li><b>Implement CASB and <a class="text-blue-500" href="https://www.linkedin.com/feed/hashtag/?keywords=cloudsecurity&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6977704982821167104">cloudsecurity</a> posture management solutions-</b><br>
 It is easy to drift out of compliance if you don’t have full visibility into the cloud. Implementing automated monitoring, detection and response can help get an alert or automatically deny unapproved policy changes. </li>

<li><b>Plan for out-of-band <a class="text-blue-500" href="https://www.linkedin.com/feed/hashtag/?keywords=communication&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6977704982821167104">communication</a>-</b><br>
 In case your internal communication channels <a class="text-blue-500" href="https://www.linkedin.com/company/tiny-spec-inc/">(Slack)</a> get breached. </li>
</ol>

In addition to the above, Patrick Tiquet, vice president of security and architecture at Keeper Security, says the Uber attack highlights a fundamental misconception around MFA's strength as a method to secure access. "Use of SMS text messages as MFA should be discouraged and never used as MFA for high-value assets," Tiquet says. "The use of an authenticator app, security key, or biometrics are stronger and more effective methods to protect your accounts." <br><br>

Although, some organizations may have implemented some of the controls above, however, it is pivotal to ensure we stay ahead with these multiple strategies in order to avoid being outplaced by the sprawling complexity of modern threats and the actors. <br>
What is the Multifactor Authentication in use at your company? Do you require immediate assessment of these? <br><br>

Reach out to us today via our email: <a class="font-semibold text-blue-500" href='mailto:info@techspecialistlimited.com' target='_blank'>info@techspecialistlimited.com</a> or phone number <a class="font-semibold text-blue-500" href='tel:092911443' target='_blank'>09 2911443</a>

`

export default uber_attack